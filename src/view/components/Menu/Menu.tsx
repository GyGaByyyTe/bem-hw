import * as React from "react";
import { cn } from "@bem-react/classname";

import { MenuList } from "./List/Menu-List";

import "./Menu.css";

const cnMenu = cn("Menu");

export const Menu: React.SFC = () => (
  <nav className={cnMenu()}>
    <MenuList
      active="pointer"
      list={[
        { id: "main", text: "Сводка" },
        { id: "dump1", text: "Устройства" },
        { id: "dump2", text: "Сценарии" },
        { id: "video", text: "Видеонаблюдение" },
        { id: "pointer", text: "Пылесос" }
      ]}
    />
  </nav>
);
