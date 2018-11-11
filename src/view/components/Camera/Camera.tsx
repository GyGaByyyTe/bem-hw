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

// <section class="camera">
//   <div class="camera__controls">
//     <div class="camera__zoom">
//       <h3 class="camera__text">Zoom: x<span class="camera__info" id="camera-zoom"></span></h3>
//     </div>
//     <div class="camera__brightness">
//       <h3 class="camera__text">Brightness:<span class="camera__info" id="camera-brightness"></span></h3>
//     </div>
//     <div class="camera__position">
//       <h3 class="camera__text">Location:</h3>
//     </div>
//     <div class="camera__location">
//       <div class="camera__range" id="camera-location">
//         <div class="camera__range-pointer" id="camera-pointer"></div>
//       </div>
//     </div>
//   </div>
//   <div class="camera__viewer" id="main-viewer" touch-action="none">
//     <div class="camera__image">
// 			<img class="camera__source" id="main-image" src="./assets/images/image.jpg" ondragstart="return false;"/>
// 		</div>
//   </div>
// </section>
