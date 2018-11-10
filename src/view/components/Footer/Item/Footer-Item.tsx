import * as React from "react";
import { cn } from "@bem-react/classname";

import { IFooterLinkProps, FooterLink } from "../Link/Footer-Link";

import "./Footer-Item.css";

const cnFooter = cn("Footer");

export const FooterItem: React.SFC<IFooterLinkProps> = props => (
  <li className={cnFooter("Item")}>
    <FooterLink href={props.href} text={props.text} />
  </li>
);
