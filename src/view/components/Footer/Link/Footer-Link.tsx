import * as React from "react";
import { cn } from "@bem-react/classname";

import "./Footer-Link.css";

export interface IFooterLinkProps {
  href: string;
  text: string;
}

const cnFooter = cn("Footer");

export const FooterLink: React.SFC<IFooterLinkProps> = props => (
  <a className={cnFooter("Link")} href={props.href}>
    {props.text}
  </a>
);
