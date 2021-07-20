export default function calcHeight(
	lines: number,
	cs: { [key: string]: string }
) {
	let [lh, fs, pb, pt] = [0, 0, 0, 0];
	if (cs.lineHeight) lh = parseInt(cs.lineHeight);
	if (cs.fontSize) fs = parseInt(cs.fontSize);
	if (cs.paddingBottom) pb = parseInt(cs.paddingBottom);
	if (cs.paddingTop) pt = parseInt(cs.paddingTop);
	if (isNaN(lh)) lh = fs;
	return lines * lh + pt + pb;
}
