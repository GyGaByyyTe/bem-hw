import * as React from "react";
import { cn } from "@bem-react/classname";

import { CameraControls } from "./Controls/Camera-Controls";
import { CameraViewer } from "./Viewer/Camera-Viewer";

import "./Camera.css";

const cnCamera = cn("Camera");

export const Camera: React.SFC = () => (
  <section className={cnCamera()}>
    <CameraControls />
    <CameraViewer viewerId="main-viewer" imgId="main-image" />
  </section>
);
