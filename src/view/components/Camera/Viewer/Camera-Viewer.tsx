import * as React from "react";
import { cn } from "@bem-react/classname";

import image from "../image.jpg";

export interface ICameraViewerProps {
  viewerId: string;
  imgId: string;
}

import "./Camera-Viewer.css";

const cnCamera = cn("Camera");

export const CameraViewer: React.SFC<ICameraViewerProps> = props => (
  <div className={cnCamera("Viewer")} id={props.viewerId} touch-action="none">
    <div className={cnCamera("Image")}>
      <img className={cnCamera("Source")} id={props.imgId} src={image} />
    </div>
  </div>
);
