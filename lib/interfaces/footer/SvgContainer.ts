import { Callback, CallbackWithArg, UseBoolean } from "@interfaces/Utilities";

import { Svg } from "./Svg";

export default interface SvgContainerProps {
  Svgs: Svg[];
  isHovering: boolean;
  toggleFocus: Callback;
}
