import * as React from "react";
import { cn } from "@bem-react/classname";

import { ICameraTextProps, CameraText } from "../Text/Camera-Text";

import "./Camera-Cell.css";

const cnCamera = cn("Camera");

export const CameraCell: React.SFC<ICameraTextProps> = props => (
  <div className={cnCamera("Cell")}>
    <CameraText {...props} />
  </div>
);
