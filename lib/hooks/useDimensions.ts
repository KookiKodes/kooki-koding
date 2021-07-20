import { useEffect, useCallback, useState, RefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";

export interface ResizeObserverEntry {
	target: HTMLElement;
	i;
	contentRect: DOMRectReadOnly;
}

export default function useDimensions(
	ref: RefObject<HTMLElement>,
	callback?: (entry: DOMRectReadOnly) => void
) {
	const [width, setWidth] = useState<number>();
	const [height, setHeight] = useState<number>();

	const handleResize = useCallback(
		(entries: ResizeObserverEntry[]) => {
			if (!Array.isArray(entries)) {
				return;
			}

			const entry = entries[0];
			setWidth(entry.contentRect.width);
			setHeight(entry.contentRect.height);

			if (callback) {
				callback(entry.contentRect);
			}
		},
		[callback]
	);

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		let RO: ResizeObserver | null = new ResizeObserver((entries: any) =>
			handleResize(entries)
		);
		RO.observe(ref.current);

		return () => {
			if (RO) {
				RO.disconnect();
			}
			RO = null;
		};
	}, [ref]);

	return [width, height];
}
