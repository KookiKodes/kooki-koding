import { Callback, CallbackWithArg } from "@interfaces/Utilities";
import { ComponentType, ChangeEvent } from "react";

export interface FlushIconTextareaProps {
  required?: CallbackWithArg<ChangeEvent<HTMLTextAreaElement>>;
  name: string;
  state: string;
  IconLeft: ComponentType;
  placeholder: string;
  maxLineCount?: number;
}
