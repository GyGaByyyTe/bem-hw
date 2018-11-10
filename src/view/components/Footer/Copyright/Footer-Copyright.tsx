import * as React from "react";
import { cn } from "@bem-react/classname";

import "./Footer-Copyright.css";

const cnFooter = cn("Footer");

export const FooterCopyright: React.SFC = () => (
  <div className={cnFooter("Copyright")}>&copy; 2001-2018 OOO "Яндекс"</div>
);
