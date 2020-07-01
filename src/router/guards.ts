import VueRouter from "vue-router";
import { documentTitle } from "@/config";

export function registerRouterNavigationGuards(router: VueRouter): void {
  router.beforeResolve((to, from, next) => {
    const titles = [documentTitle];
    to.meta.title && titles.unshift(to.meta.title);
    document.title = titles.join("-");
    next();
  });
}
