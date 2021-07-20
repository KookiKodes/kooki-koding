import { Callback, CallbackWithArg } from "@interfaces/Utilities";
import { ComponentType } from "react";

export interface FlushIconTextareaProps {
	required?: Callback;
	name: string;
	state: string;
	IconLeft: ComponentType;
	placeholder: string;
	toggleState: CallbackWithArg<string>;
	toggleFocus: CallbackWithArg<any>;
	isFocused: boolean;
}
