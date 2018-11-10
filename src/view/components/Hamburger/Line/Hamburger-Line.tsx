import * as React from "react";
import { cn } from "@bem-react/classname";

import "./Hamburger-Line.css";

const cnHamburger = cn("Hamburger");

export const HamburgerLine: React.SFC = () => (
  <div className={cnHamburger("Line")} />
);
