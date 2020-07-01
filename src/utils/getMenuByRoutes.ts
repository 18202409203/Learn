import { MenuRouteConfig } from "@/types";
import { CMenuItem } from "@/types";

export function getMenuByRoutes(
  routes: Array<MenuRouteConfig>,
  isMergeMenu: boolean
): Array<CMenuItem> {
  const menuItems: Array<CMenuItem> = routes.reduce(
    (pre: Array<CMenuItem>, cur) => {
      if (!cur.meta.hiddenInMenu) {
        const menuItem: CMenuItem = {
          name: cur.name,
          title: cur.meta.title,
          icon: cur.meta.icon,
          iconText: cur.meta.iconText || "iconText",
          route: cur.path
        };
        if (cur.children) {
          menuItem.children = getMenuByRoutes(cur.children, false);
        }
        pre.push(menuItem);
      }
      return pre;
    },
    []
  );
  return isMergeMenu
    ? [
        {
          name: "Menu",
          title: "菜单",
          icon: "el-icon-more",
          iconText: "text",
          children: menuItems
        }
      ]
    : menuItems;
}
