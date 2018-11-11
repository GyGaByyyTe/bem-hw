import * as React from "react";
import { cn } from "@bem-react/classname";

import { HeaderLeft } from "./Left/Header-Left";
import { HeaderRight } from "./Right/Header-Right";

import "../Container/Container.css";
import "./Header.css";

const cnHeader = cn("Header");

export const Header: React.SFC = () => (
  <header className={cnHeader(null, ["Container"])}>
    <HeaderLeft />
    <HeaderRight />
  </header>
);
