import { ComponentType } from "react";
import { Callback, CallbackWithArg } from "@interfaces/Utilities";

export interface FlushIconButtonProps {
  children: string;
  name: string;
  state: string;
  IconRight: ComponentType;
  submitFn: Callback;
  isFocusing: boolean;
  disabled: boolean;
  toggleFocus: CallbackWithArg<any>;
}
