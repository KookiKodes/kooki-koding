import { useEffect, useRef } from "react";

const useRangeStr = (max: number): ((max: number) => string) => {
	const rangeStr = useRef("1\n");
	const prevMax = useRef(max);

	useEffect(() => {
		rangeStr.current = genRangeStr(0, max);
	}, []);

	function genRangeStr(min: number, max: number): string {
		return Array(Math.abs(max - min))
			.fill(0)
			.map((_, index) => (max <= 1 ? max : min + index + 1))
			.join("\n");
	}

	const getRangeStr = (max: number) => {
		const prev = prevMax.current,
			str = rangeStr.current;

		if (prev < max) rangeStr.current += "\n" + genRangeStr(prev, max);
		else if (prev > max)
			rangeStr.current = str.substr(
				0,
				str.length - genRangeStr(max, prev).length - 1
			);

		prevMax.current = max;
		return rangeStr.current;
	};

	return getRangeStr;
};

export default useRangeStr;
