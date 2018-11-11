import * as React from "react";
import { cn } from "@bem-react/classname";
import { RegistryConsumer } from "@bem-react/di";

import { HeaderLeft } from "./Left/Header-Left";

import "../Container/Container.css";
import "./Header.css";

const cnHeader = cn("Header");

export const Header: React.SFC = () => {
  return (
    <header className={cnHeader(null, ["Container"])}>
      <HeaderLeft />
      <RegistryConsumer>
        {registries => {
          const registry = registries[cnHeader()];
          const HeaderRight = registry.get(cnHeader("Right"));
          return <HeaderRight />;
        }}
      </RegistryConsumer>
    </header>
  );
};
