import { RouteConfig } from "vue-router";

export * from "./store";

export type iconTextType = "icon" | "text" | "iconText";
export type mouseTriggerType = "hover" | "click";

export interface CMenuItem {
  name: string;
  title: string;
  iconText?: iconTextType;
  hidden?: boolean;
  icon?: string;
  route?: string;
  children?: Array<CMenuItem>;
}

export type MenuRouteConfig = RouteConfig & {
  name: string;
  children?: Array<MenuRouteConfig>;
  meta: {
    title: string;
    icon?: string | undefined;
    hiddenInMenu?: boolean;
  };
};

export type CFormItemType = "select" | "input";

export interface COption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CFormItem {
  model: string;
  label: string;
  type?: CFormItemType;
  options?: Array<COption>;
}
