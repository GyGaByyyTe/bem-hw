import * as React from "react";
import { cn } from "@bem-react/classname";

import { Header } from "../Header/Header";
import { Camera } from "../Camera/Camera";

import "../Content/Content.css";

const cnContent = cn("Content");

export const Content: React.SFC = () => (
  <div className={cnContent()}>
    <Header />
    <Camera />
  </div>
);
