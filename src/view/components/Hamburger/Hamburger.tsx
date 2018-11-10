import * as React from "react";
import { cn } from "@bem-react/classname";

import { HamburgerLink } from "./Link/Hamburger-Link";

import "./Hamburger.css";

const cnHamburger = cn("Hamburger");

export const Hamburger: React.SFC = () => (
  <div className={cnHamburger()}>
    <HamburgerLink />
  </div>
);
