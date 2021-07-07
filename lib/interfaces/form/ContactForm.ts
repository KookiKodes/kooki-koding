import { UseBoolean, CallbackWithArg } from "@interfaces/Utilities";

export enum ContactFormStateTypes {
	"INACTIVE" = 1 << 0,
	"FOCUS" = 1 << 1,
	"INVALID" = 1 << 2,
	"VALID" = 1 << 3,
	"DISABLED" = 1 << 4,
	"SENDING" = 1 << 5,
	"SENT" = 1 << 6,
	"ERROR" = 1 << 7,
}
export interface ContactFormProps {
	state: string;
	toggleState: CallbackWithArg<string>;
}

export interface FormStatusProps {
	message: string;
}
