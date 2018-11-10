import * as React from "react";
import { cn } from "@bem-react/classname";

import { FooterList } from "./List/Footer-List";
import { FooterCopyright } from "./Copyright/Footer-Copyright";

import "./Footer.css";

const cnFooter = cn("Footer");

export const Footer: React.SFC = () => (
  <footer className={cnFooter()}>
    <FooterList />
    <FooterCopyright />
  </footer>
);
