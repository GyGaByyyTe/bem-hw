import * as React from "react";
import { cn } from "@bem-react/classname";

import { FooterItem } from "../Item/Footer-Item";

import "./Footer-List.css";

const cnFooter = cn("Footer");

export const FooterList: React.SFC = () => (
  <ul className={cnFooter("List")}>
    <FooterItem href="#" text="Помощь" />
    <FooterItem href="#" text="Обратная связь" />
    <FooterItem href="#" text="Разработчикам" />
    <FooterItem
      href="https://gygabyyyte.github.io/shri-hw-1/license.pdf"
      text="Условия использования"
    />
  </ul>
);
