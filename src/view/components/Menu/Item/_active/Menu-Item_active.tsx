import { withBemMod } from "@bem-react/core";
import { IMenuItemProps } from "../index";

export const MenuItemActive = withBemMod<IMenuItemProps>("Menu-Item", {
  active: true
});
