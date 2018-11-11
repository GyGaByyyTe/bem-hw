import * as React from "react";
import { cn } from "@bem-react/classname";

import "./Camera-Location.css";

const cnCamera = cn("Camera");

export const CameraLocation: React.SFC = () => (
  <div className={cnCamera("Location")}>
    <div className={cnCamera("Range")} id="camera-location">
      <div className={cnCamera("RangePointer")} id="camera-pointer" />
    </div>
  </div>
);
