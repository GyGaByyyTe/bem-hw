import * as React from "react";
import { cn } from "@bem-react/classname";

import { Header as HeaderDesktop } from "../Header/Header@desktop";
import { Header as HeaderMobile } from "../Header/Header@mobile";
import { Camera } from "../Camera/Camera";

import "../Content/Content.css";

const cnContent = cn("Content");

export const Content: React.SFC = () => {
  return (
    <div className={cnContent()}>
      <HeaderMobile />
      <Camera />
    </div>
  );
};
