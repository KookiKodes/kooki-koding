import { CallbackWithArg, UseBoolean } from "@interfaces/Utilities";

import { Svg } from "./Svg";

export default interface SvgContainerProps {
	Svgs: Svg[];
	hovering: boolean;
	hoveredLink: string;
	setHoveredLink: CallbackWithArg<string>;
	setHovering: UseBoolean;
}
