import { compose, IClassNameProps } from "@bem-react/core";

import { MenuItem as Base } from "./Menu-Item";
import { MenuItemActive } from "./_active/Menu-Item_active";

import { IMenuLinkProps } from "../Link/Menu-Link";

export interface IMenuItemProps extends IMenuLinkProps, IClassNameProps {
  active?: true;
}

export const MenuItem = compose(MenuItemActive)(Base);
