import { Callback, CallbackWithArg } from "@interfaces/Utilities";
import { ComponentType } from "react";

export interface FlushIconTextareaProps {
	required?: Callback;
	name: string;
	state: string;
	IconLeft: ComponentType;
	placeholder: string;
	toggleFocus: CallbackWithArg<any>;
	maxLineCount?: number;
}
