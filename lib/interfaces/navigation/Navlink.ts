import React, { RefObject } from "react";
import { Callback, CallbackWithArg } from "@interfaces/Utilities";

export interface Link {
	name: string;
	to: string;
}

export default interface NavlinkProps extends Link {
	linkRef?: RefObject<HTMLElement> | null;
	active: boolean;
	hovering: boolean;
	hoverSelector: boolean;
	blurAmount: string;
	setHoverSelector: Callback;
	setFocus: CallbackWithArg<React.MouseEvent>;
	setBlur: CallbackWithArg<React.MouseEvent>;
	onClick: CallbackWithArg<React.MouseEvent>;
}
