import { UseBoolean, CallbackWithArg } from "@interfaces/Utilities";

export enum ContactFormStateTypes {
	"INACTIVE" = 1 << 0,
	"FOCUS" = 1 << 1,
	"INVALID" = 1 << 2,
	"VALID" = 1 << 3,
	"SENDING" = 1 << 4,
	"SENT" = 1 << 5,
	"ERROR" = 1 << 6,
}
export interface ContactFormProps {
	state: string;
	toggleState: CallbackWithArg<string>;
}

export interface FormStatusProps {
	state: string;
	placeholder?: string;
}

export const isFocus = (stateByte: number) => (stateByte & ContactFormStateTypes.FOCUS) === ContactFormStateTypes.FOCUS;
export const isInvalid = (stateByte: number) => (stateByte & ContactFormStateTypes.INVALID) === ContactFormStateTypes.INVALID;
export const isValid = (stateByte: number) => (stateByte & ContactFormStateTypes.VALID) === ContactFormStateTypes.VALID;
export const isSending = (stateByte: number) => (stateByte & ContactFormStateTypes.SENDING) === ContactFormStateTypes.SENDING;
export const isSent = (stateByte: number) => (stateByte & ContactFormStateTypes.SENT) === ContactFormStateTypes.SENT;
export const isError = (stateByte: number) => (stateByte & ContactFormStateTypes.ERROR) === ContactFormStateTypes.ERROR;
export const isInactive = (stateByte: number) => (stateByte & ContactFormStateTypes.INACTIVE) === ContactFormStateTypes.INACTIVE;
