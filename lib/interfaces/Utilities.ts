import { CSSWithMultiValues, RecursiveCSSObject } from "@chakra-ui/react";
import { ComponentType } from "react";

export type UseBoolean = {
	readonly on: () => void;
	readonly off: () => void;
	readonly toggle: () => void;
};

export type Callback = () => void;
export type CallbackWithArg<T> = (arg: T) => void;
export type CallbackWithReturn<T> = () => T;
export type CallbackWithReturnArg<A,T> = (arg: A) => T;

export interface SVGWrapperProps {
	styles: RecursiveCSSObject<CSSWithMultiValues>;
	SVG: ComponentType;
}
