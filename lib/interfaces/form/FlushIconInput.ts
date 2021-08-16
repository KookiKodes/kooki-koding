//* packages
import * as React from "react";

//* interfaces
import { Callback, CallbackWithArg } from "@interfaces/Utilities";
import {ContactFormStateTypes} from "./ContactForm";

export interface FlushIconInputProps {
	toggleFocus: CallbackWithArg<any>;
	IconLeft?: React.ComponentType;
	type: string;
	placeholder: string;
	state: string;
	IconRight?: React.ComponentType;
	name: string;
	required?: Callback;
}

export interface IconInputProps {
	dir: string;
	Icon: React.ComponentType;
}
