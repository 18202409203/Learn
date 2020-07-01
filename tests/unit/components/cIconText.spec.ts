import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { AppState } from "@/types";
import { cIconText } from "@/components";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("cIconText.vue", () => {
  const ICON = "icon";
  const TEXT = "text";
  let store: Store<AppState>;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      modules: {
        app: {
          namespaced: true,
          state: {
            iconText: TEXT
          }
        }
      }
    });
  });

  it("does not contain icons, only texts.", () => {
    const wrapper: Wrapper<cIconText & {
      [key: string]: any;
    }> = shallowMount(cIconText, { store, localVue });
    expect(wrapper.vm.iconTextSync).toBe(TEXT);
  });

  it("does not contain texts, only icons", () => {
    const wrapper: Wrapper<cIconText & {
      [key: string]: any;
    }> = shallowMount(cIconText, {
      store,
      localVue,
      propsData: {
        iconText: ICON
      }
    });
    expect(wrapper.vm.iconTextSync).toBe(ICON);
  });
});
