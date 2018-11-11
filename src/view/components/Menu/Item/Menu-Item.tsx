import * as React from "react";
import { cn } from "@bem-react/classname";
import { IMenuItemProps } from "./index";

import { MenuLink } from "../Link/Menu-Link";

import "./Menu-Item.css";

const cnMenu = cn("Menu");

export const MenuItem: React.SFC<IMenuItemProps> = ({
  id,
  text,
  className
}) => (
  <li className={className}>
    <MenuLink id={id} text={text} />
  </li>
);
