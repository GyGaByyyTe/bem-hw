import * as React from "react";
import { cn } from "@bem-react/classname";

import { Hamburger } from "../../Hamburger/Hamburger";
import { Menu } from "../../Menu/Menu";

import "./Header-Right.css";

const cnHeader = cn("Header");

export const HeaderRight: React.SFC = () => (
  <div className={cnHeader("Right")}>
    <Hamburger />
    <Menu />
  </div>
);
