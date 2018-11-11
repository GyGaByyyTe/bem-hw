import { Registry, withRegistry } from "@bem-react/di";
import { cn } from "@bem-react/classname";

import { Header as HeaderCommon } from "./Header";
import { HeaderRight } from "./Right/Header-Right@desktop";

const cnHeader = cn("Header");

const registry = new Registry({ id: cnHeader() });

registry.set(cnHeader("Right"), HeaderRight);

export const Header = withRegistry(registry)(HeaderCommon);
