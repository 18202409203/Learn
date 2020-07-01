import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import { app } from "./modules";
import { useVuexLogger } from "@/config";

Vue.use(Vuex);

const notProduction: boolean = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app
  },
  strict: notProduction,
  plugins: useVuexLogger ? [createLogger()] : []
});
