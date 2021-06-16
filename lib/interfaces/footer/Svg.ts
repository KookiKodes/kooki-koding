import { Callback, UseBoolean } from "@interfaces/Utilities";

export interface Svg {
	name: string;
	filename: string;
	href: string;
}

export default interface SvgProps extends Svg {
	hovering: boolean;
	hoveredLink: boolean;
	setHoveredLink: Callback;
	setFocus: Callback;
	setBlur: Callback;
}
