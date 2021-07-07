import { Callback} from "@interfaces/Utilities";
import { ComponentType } from "react";

export interface Svg {
	name: string;
	SVG: ComponentType;
	href: string;
}

export default interface SvgProps extends Svg {
	hovering: boolean;
	hoveredLink: boolean;
	setHoveredLink: Callback;
	setFocus: Callback;
	setBlur: Callback;
}
