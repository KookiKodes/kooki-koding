export type UseBoolean = {
	readonly on: () => void;
	readonly off: () => void;
	readonly toggle: () => void;
};

export type Callback = () => void;
export type CallbackWithArg<T> = (arg: T) => void;
