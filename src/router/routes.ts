import { RouteConfig } from "vue-router";
import { MenuRouteConfig } from "@/types";
import layout from "@/layout/index.vue";

/**
 * 菜单路由
 */
export const menuRoutes: Array<MenuRouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "首页",
      icon: "el-icon-s-home",
      hiddenInMenu: false
    }
  },
  {
    path: "/appStore",
    name: "AppStore",
    meta: {
      title: "工具中心",
      icon: "el-icon-shopping-bag-2",
      hiddenInMenu: false
    },
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];

/**
 * 权限路由
 */
export const authRoutes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Root",
    component: layout,
    redirect: "/home",
    children: menuRoutes
  }
];

/**
 * 无需权限的路由
 */
export const commonRoutes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录"
    },
    component: () => import("@/views/Login.vue")
  }
];
