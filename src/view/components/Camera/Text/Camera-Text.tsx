import * as React from "react";
import { cn } from "@bem-react/classname";

export interface ICameraTextProps {
  content: string;
  infoId?: string;
}

import "./Camera-Text.css";

const cnCamera = cn("Camera");

export const CameraText: React.SFC<ICameraTextProps> = props => (
  <h3 className={cnCamera("Text")}>
    {props.content}
    {props.infoId && <span className={cnCamera("Info")} id={props.infoId} />}
  </h3>
);
