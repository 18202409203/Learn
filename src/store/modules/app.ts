import { getMenuByRoutes } from "@/utils";
import { iconText } from "@/config";
import { menuRoutes } from "@/router/routes";
import { AppState, RootState } from "@/types";
import { GetterTree, MutationTree } from "vuex";
import { fullScreen, exitFullScreen } from "@/utils";
import { isSmallScreen } from "@/utils";

const state: AppState = {
  iconText: iconText,
  isFullScreen: false,
  isLeftDrawer: false,
  isSmallScreen: false
};

const getters: GetterTree<AppState, RootState> = {
  menuList: (state, getters) =>
    getMenuByRoutes(menuRoutes, getters.isSmallScreen),
  isSmallScreen: state => state.isSmallScreen
};

const mutations: MutationTree<AppState> = {
  setIconText(state: AppState, payload: AppState["iconText"]): void {
    state.iconText = payload;
  },
  setFullScreen(state: AppState, payload: AppState["isFullScreen"]): void {
    payload ? fullScreen() : exitFullScreen();
    state.isFullScreen = payload;
  },
  setLeftDrawer(state: AppState, payload: AppState["isLeftDrawer"]): void {
    state.isLeftDrawer = payload;
  },
  setSmallScreen(state: AppState): void {
    state.isSmallScreen = isSmallScreen();
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions: {}
};
