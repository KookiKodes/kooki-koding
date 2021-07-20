import { useRef, useEffect, MutableRefObject } from "react";

function useComputedStyle<T extends HTMLElement>(
	ref: MutableRefObject<T>,
	styles: string[]
) {
	const computedStyles = useRef<CSSStyleDeclaration>();
	const watched = useRef<{ [key: string]: any }>({});

	useEffect(() => {
		computedStyles.current = window.getComputedStyle(ref.current);
		styles.forEach((style, index) => {
			if (computedStyles.current) {
				watched.current[style] = computedStyles.current[style];
			}
		});
	}, []);

	return watched.current;
}

export default useComputedStyle;
