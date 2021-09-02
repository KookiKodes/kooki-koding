//* packages
import { ChangeEvent } from "react";

//* interfaces
import { Callback, CallbackWithArg } from "@interfaces/Utilities";

export interface FlushIconInputProps {
  IconLeft?: React.ComponentType;
  type: string;
  placeholder: string;
  state: string;
  IconRight: React.ComponentType | null;
  name: string;
  required?: CallbackWithArg<ChangeEvent<HTMLInputElement>>;
}

export interface IconInputProps {
  dir: string;
  Icon: React.ComponentType;
}
