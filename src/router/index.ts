import Vue from "vue";
import VueRouter from "vue-router";
import { commonRoutes, authRoutes } from "./routes";
import { registerRouterNavigationGuards } from "./guards";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...commonRoutes, ...authRoutes]
});

registerRouterNavigationGuards(router);

export default router;
