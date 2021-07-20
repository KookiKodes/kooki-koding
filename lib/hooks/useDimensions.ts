import { useEffect, useCallback, useState, RefObject } from "react";

export default function useDimensions(
	ref: RefObject<HTMLElement>,
	callback?: (entry: DOMRectReadOnly) => void
) {
	const [width, setWidth] = useState();
	const [height, setHeight] = useState();

	const handleResize = useCallback(
		(entries: ResizeObserverEntry[]) => {
			if (!Array.isArray(entries)) {
				return;
			}

			const entry = entries[0] as any;
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

		let RO: ResizeObserver | null = new ResizeObserver(
			(entries: ResizeObserverEntry[]) => handleResize(entries)
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
