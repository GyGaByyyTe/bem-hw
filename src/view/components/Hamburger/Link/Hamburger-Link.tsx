import * as React from "react";
import { cn } from "@bem-react/classname";

import { HamburgerLine } from "../Line/Hamburger-Line";

import "./Hamburger-Link.css";

const cnHamburger = cn("Hamburger");

export const HamburgerLink: React.SFC = () => (
  <a className={cnHamburger("Link")} href="#">
    Меню
    <HamburgerLine />
  </a>
);
