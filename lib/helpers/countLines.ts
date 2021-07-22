export function countLines<T extends HTMLTextAreaElement>(
	textarea: T,
	buffer: T,
	cs: { [key: string]: any }
): number {
	let pl = parseInt(cs.paddingLeft),
		pr = parseInt(cs.paddingRight),
		lh = parseInt(cs.lineHeight);

	// [cs.lineHeight] may return 'normal', which means line height = font size.
	if (isNaN(lh)) lh = parseInt(cs.fontSize);

	// Copy content width.
	buffer.style.width = textarea.clientWidth + "px";

	// Copy value.
	buffer.value = textarea.value;

	let result = Math.floor(buffer.scrollHeight / lh);
	return result || 1;
}
