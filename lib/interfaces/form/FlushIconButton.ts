import { ComponentType, FormEvent } from "react";
import { CallbackWithArg, PromiseCallbackWithArg } from "@interfaces/Utilities";

export interface FlushIconButtonProps {
  children: string;
  name: string;
  state: string;
  IconRight: ComponentType;
  disabled: boolean;
}
