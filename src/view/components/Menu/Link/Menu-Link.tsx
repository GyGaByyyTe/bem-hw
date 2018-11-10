import * as React from "react";
import { cn } from "@bem-react/classname";

import "./Menu-Link.css";

export interface IMenuLinkProps {
  id: string;
  text: string;
}

const cnMenu = cn("Menu");

export const MenuLink: React.SFC<IMenuLinkProps> = props => (
  <a className={cnMenu("Link")} id={props.id}>
    {props.text}
  </a>
);
