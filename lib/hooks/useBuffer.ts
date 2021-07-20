import { useRef, useEffect, MutableRefObject } from "react";

export function useBuffer(
	element: string,
	computedStyles: { [key: string]: any },
	selected: string[]
) {
	const buffer = useRef<any>(null);

	useEffect(() => {
		if (!buffer.current) {
			buffer.current = document.createElement(element);
			buffer.current.style.border = "none";
			buffer.current.style.height = "0";
			buffer.current.style.overflow = "hidden";
			buffer.current.style.padding = "0";
			buffer.current.style.position = "absolute";
			buffer.current.style.left = "0";
			buffer.current.style.top = "0";
			buffer.current.style.zIndex = "-1";
			document.body.appendChild(buffer.current);
			selected.forEach((style) => {
				if (buffer.current) {
					buffer.current.style[style] = computedStyles[style];
				}
			});
		}
	}, []);

	return buffer.current;
}
