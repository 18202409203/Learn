import { breakPoint } from "@/config";

export const isSmallScreen = function(): boolean {
  const width = document.body.scrollWidth;
  return width < breakPoint;
};
