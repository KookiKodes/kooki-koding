export async function countLines(
	textarea: HTMLTextAreaElement,
	buffer: HTMLTextAreaElement | null
) {
	buffer;
	if (buffer == null) {
		buffer = document.createElement("textarea");
		buffer.style.border = "none";
		buffer.style.height = "0";
		buffer.style.overflow = "hidden";
		buffer.style.padding = "0";
		buffer.style.position = "absolute";
		buffer.style.left = "0";
		buffer.style.top = "0";
		buffer.style.zIndex = "-1";
		document.body.appendChild(buffer);
	}

	const cs = window.getComputedStyle(textarea),
		pl = parseInt(cs.paddingLeft),
		pr = parseInt(cs.paddingRight);
	let lh = parseInt(cs.lineHeight);

	// [cs.lineHeight] may return 'normal', which means line height = font size.
	if (isNaN(lh)) lh = parseInt(cs.fontSize);

	// Copy content width.
	buffer.style.width = textarea.clientWidth - pl - pr + "px";

	// Copy text properties.
	buffer.style.font = cs.font;
	buffer.style.letterSpacing = cs.letterSpacing;
	buffer.style.whiteSpace = cs.whiteSpace;
	buffer.style.wordBreak = cs.wordBreak;
	buffer.style.wordSpacing = cs.wordSpacing;
	buffer.style.wordWrap = cs.wordWrap;

	// Copy value.
	buffer.value = textarea.value;

	let result = Math.floor(buffer.scrollHeight / lh);
	if (result == 0) result = 1;
	return result;
}
