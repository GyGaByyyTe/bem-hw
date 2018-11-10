import * as React from "react";
import { cn } from "@bem-react/classname";

import { Logo } from "../../Logo/Logo";

import "./Header-Left.css";

const cnHeader = cn("Header");

export const HeaderLeft: React.SFC = props => (
  <div className={cnHeader("Left")}>
    <Logo />
  </div>
);
