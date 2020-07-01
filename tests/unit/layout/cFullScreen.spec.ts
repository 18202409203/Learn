import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { AppState } from "@/types";
import { cFullScreen } from "@/layout/components/cHeader/components";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("cFullScreen.vue", () => {
  let store: Store<AppState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        app: {
          namespaced: true,
          state: {
            isFullScreen: false
          },
          mutations: {
            setFullScreen(
              state: AppState,
              payload: AppState["isFullScreen"]
            ): void {
              state.isFullScreen = payload;
            }
          }
        }
      }
    });
  });

  it("method changeScreen", () => {
    const wrapper: Wrapper<cFullScreen & {
      [key: string]: any;
    }> = shallowMount(cFullScreen, { store, localVue });
    expect(wrapper.vm.isFullScreen).toBe(false);
    wrapper.vm.changeScreen();
    expect(wrapper.vm.isFullScreen).toBe(true);
  });
});
