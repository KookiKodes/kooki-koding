import { Callback, CallbackWithArg } from "@interfaces/Utilities";
import { ComponentType } from "react";

export interface Svg {
  name: string;
  SVG: ComponentType;
  href: string;
}

export default interface SvgProps extends Svg {
  containerIsHovered: boolean;
  toggleFocus: Callback;
  hoveredLink: boolean;
  setHoveredLink: Callback;
}
