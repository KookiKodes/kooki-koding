import { RefObject } from "react";

import { UseBoolean, CallbackWithArg, Callback } from "@interfaces/Utilities";
import { Link } from "./Navlink";

export default interface NavlinkContainerProps {
	links: Link[];
	activeRoute: string;
	hovering: boolean;
	shouldBeBlurred: boolean;
	setHovering: UseBoolean;
	hoverSelector: string;
	linkRef?: RefObject<HTMLElement>;
	linkContainerRef?: RefObject<HTMLElement>;
	setHoverSelector: CallbackWithArg<string>;
	closeOnLinkClick: Callback;
}
