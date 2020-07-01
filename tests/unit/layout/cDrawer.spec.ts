import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { AppState } from "@/types";
import { cDrawer } from "@/layout/components";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("cDrawer.vue", () => {
  const ICON = "icon";
  const TEXT = "text";
  let IS_SMALL_SCREEN = true;
  let store: Store<AppState>;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      modules: {
        app: {
          namespaced: true,
          state: {
            iconText: TEXT,
            isLeftDrawer: false
          },
          mutations: {
            setLeftDrawer(
              state: AppState,
              payload: AppState["isLeftDrawer"]
            ): void {
              state.isLeftDrawer = payload;
            },
            setIconText(state: AppState, payload: AppState["iconText"]): void {
              state.iconText = payload;
            }
          },
          getters: {
            isSmallScreen: () => IS_SMALL_SCREEN
          }
        }
      }
    });
  });

  it("computed isShowDrawer", () => {
    const wrapper: Wrapper<cDrawer & {
      [key: string]: any;
    }> = shallowMount(cDrawer, { store, localVue });
    expect(wrapper.vm.isShowDrawer).toBe(false);
    wrapper.vm.isShowDrawer = true;
    expect(wrapper.vm.isShowDrawer).toBe(true);
    wrapper.vm.closeDrawer();
    expect(wrapper.vm.isShowDrawer).toBe(false);
    wrapper.vm.settings.iconText = ICON;
    wrapper.vm.saveSettings();
    expect(wrapper.vm.$store.state.app.iconText).toBe(ICON);
    expect(wrapper.vm.drawerSize).toBe("80%");
  });

  it("changes drawerSize by isSmallScreen", () => {
    IS_SMALL_SCREEN = false;
    const wrapper: Wrapper<cDrawer & {
      [key: string]: any;
    }> = shallowMount(cDrawer, { store, localVue });
    expect(wrapper.vm.drawerSize).toBe("30%");
  });
});
