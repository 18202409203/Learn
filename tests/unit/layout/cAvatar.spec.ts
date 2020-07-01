import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { AppState } from "@/types";
import { cAvatar } from "@/layout/components/cHeader/components";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("cAvatar.vue", () => {
  let store: Store<AppState>;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      modules: {
        app: {
          namespaced: true,
          state: {
            isLeftDrawer: false
          },
          mutations: {
            setLeftDrawer(
              state: AppState,
              payload: AppState["isLeftDrawer"]
            ): void {
              state.isLeftDrawer = payload;
            }
          }
        }
      }
    });
  });

  it("method openDrawer", () => {
    const wrapper: Wrapper<cAvatar & {
      [key: string]: any;
    }> = shallowMount(cAvatar, { store, localVue });
    expect(wrapper.vm.$store.state.app.isLeftDrawer).toBe(false);
    wrapper.vm.openDrawer();
    expect(wrapper.vm.$store.state.app.isLeftDrawer).toBe(true);
  });
});
