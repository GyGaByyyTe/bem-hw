import * as React from "react";
import { cn } from "@bem-react/classname";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import "../Content/Content.css";

const cnContent = cn("Content");

export const Content: React.SFC = () => (
  <header className={cnContent()}>
    <Header />
    <Footer />
  </header>
);
