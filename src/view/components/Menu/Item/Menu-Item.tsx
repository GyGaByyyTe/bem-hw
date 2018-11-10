import * as React from "react";
import { cn } from "@bem-react/classname";

import { IMenuLinkProps, MenuLink } from "../Link/Menu-Link";

import "./Menu-Item.css";

export interface IMenuItemProps extends IMenuLinkProps {
  isActive: boolean;
}

const cnMenu = cn("Menu");

export const MenuItem: React.SFC<IMenuItemProps> = props => (
  <li className={cnMenu("Item", { active: props.isActive })}>
    <MenuLink id={props.id} text={props.text} />
  </li>
);
