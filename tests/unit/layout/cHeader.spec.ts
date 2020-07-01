import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { AppState } from "@/types";
import { cHeader } from "@/layout/components";
import { commonRoutes, authRoutes } from "@/router/routes";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe("cHeader.vue", () => {
  let store: Store<AppState>;
  let router: VueRouter;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      modules: {
        app: {
          namespaced: true,
          getters: {
            menuList: () => [],
            isSmallScreen: () => false
          }
        }
      }
    });
    router = new VueRouter({
      mode: "history",
      base: process.env.BASE_URL,
      routes: [...commonRoutes, ...authRoutes]
    });
  });

  it("computed activeMenu", () => {
    const wrapper: Wrapper<cHeader & {
      [key: string]: any;
    }> = shallowMount(cHeader, { store, localVue, router });
    expect(wrapper.vm.activeMenu).toBe(wrapper.vm.$route.name);
  });
});
