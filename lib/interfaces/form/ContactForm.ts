import { FormEvent, FocusEvent } from "react";
import {
  CallbackWithArg,
  Callback,
  CallbackWithReturn,
  CallbackWithReturnArg,
} from "@interfaces/Utilities";
import { UseValidationEventObj } from "@lib/hooks/useValidation";
import { TestGroup } from "@helper/Test";
import { ResponseObject } from "@helper/emailApi/emailInterfaces";

type CustomEventFn = CallbackWithArg<CustomEvent<UseValidationEventObj>>;
type EventFn = CallbackWithArg<FormEvent<HTMLFormElement>>;
export interface FormStatusProps {
  state: string;
  message: string | string[];
}

type ContactFormStates =
  | "default"
  | "invalid"
  | "valid"
  | "sending"
  | "sent"
  | "error";
type ContactFormMethods = "toggle" | "switch" | "on" | "off";
type Serialized = { [key: string]: string };
// export interface ContactFormProps {
//   onValid?: CustomEventFn;
//   onInvalid?: CustomEventFn;
//   onChange?: CustomEventFn;
//   onError?: <T>(response: T) => void;
//   onSent?: <T>(response: T) => void;
//   onSending?: CustomEventFn;
//   onLoad?: Callback;
//   onSubmit: CallbackWithReturnArg<Serialized, boolean>;
//   updateMessage: CallbackWithReturn<string>;
//   onFocus?: CallbackWithArg<FocusEvent<HTMLFormElement>>;
//   testGroups: TestGroup[];
// }
