import * as React from "react";
import { withBemMod, ModBody } from "@bem-react/core";
import { IMenuItemProps } from "../index";

// const ItemActive: ModBody<IMenuItemProps> = (Base, { text, className }) => (
//     // className === 'MenuItem MenuItem_type_link'
//     <a className={className}>{text}</a>
// );

// should be read like:
//   if props.type === 'link' → return MenuItemLinkBody(...)
//   else → return Base
export const MenuItemActive = withBemMod<IMenuItemProps>("MenuItem", {
  active: true
});
