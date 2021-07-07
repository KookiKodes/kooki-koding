//* packages
import * as React from "react";

//* interfaces
import { Callback } from "@interfaces/Utilities";
import {ContactFormStateTypes} from "./ContactForm";

export interface FlushIconInputProps {
	iconLeft?: string;
	type: string;
	placeholder: string;
	state: string;
	iconRight?: string;
	name: string;
	required?: Callback;
}

export interface IconInputProps {
	dir: string;
	Icon: React.ComponentType;
}
