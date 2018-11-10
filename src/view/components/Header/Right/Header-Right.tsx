import * as React from "react";
import { cn } from "@bem-react/classname";

import { Hamburger } from "../../Hamburger/Hamburger";

import "./Header-Right.css";

const cnHeader = cn("Header");

export const HeaderRight: React.SFC = () => (
  <div className={cnHeader("Right")}>
    <Hamburger />
    {/* //   <HeaderItem href="#" text="Помощь" />
  //   <HeaderItem href="#" text="Обратная связь" />
  //   <HeaderItem href="#" text="Разработчикам" />
  //   <HeaderItem */}
    {/* //     href="https://gygabyyyte.github.io/shri-hw-1/license.pdf"
  //     text="Условия использования"
  //   /> */}
  </div>
);
