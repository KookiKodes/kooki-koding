export default function genRangeStr(max: number): string {
	const arr = Array(max)
		.fill(0)
		.map((_, index) => index + 1);
	return arr.toString().replace(/,/gi, "\n");
}
