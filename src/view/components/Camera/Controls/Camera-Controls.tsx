import * as React from "react";
import { cn } from "@bem-react/classname";

import { CameraCell } from "../Cell/Camera-Cell";
import { CameraLocation } from "../Location/Camera-Location";

import "./Camera-Controls.css";

const cnCamera = cn("Camera");

export const CameraControls: React.SFC = () => (
  <div className={cnCamera("Controls")}>
    <CameraCell content="Zoom: x" infoId="camera-zoom" />
    <CameraCell content="Brightness:" infoId="camera-brightness" />
    <CameraCell content="Location:" />
    <CameraLocation />
  </div>
);
