//* packages
import { useState, useRef, useEffect, MutableRefObject } from "react";
import { useMultiStyleConfig, StylesProvider } from "@chakra-ui/system";

//* components
import { MotionTextarea, MotionFlex } from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";
import { TextareaLineNumber } from "./textarea-line-number";

//* interfaces
import { FlushIconTextareaProps as Props } from "@interfaces/form/FlushIconTextarea";

//* helpers
import { countLines } from "@helper/countLines";
import calcHeight from "@helper/calcHeight";

//* hooks
import useComputedStyle from "@lib/hooks/useComputedStyle";
import useDimensions from "@lib/hooks/useDimensions";
import { useBuffer } from "@lib/hooks/useBuffer";

//* static
import { computedCss, bufferCss } from "@lib/static/flush-input-textarea";

export function FlushIconTextarea({
	IconLeft,
	required,
	name,
	state,
	placeholder,
	isFocused,
	toggleFocus,
	toggleState,
}: Props) {
	const [value, setValue] = useState("");
	const [lines, setLines] = useState(1);
	const textarea = useRef<HTMLTextAreaElement>(null);
	const [width, _] = useDimensions(textarea);
	const cs = useComputedStyle<HTMLTextAreaElement>(
		textarea as MutableRefObject<HTMLTextAreaElement>,
		computedCss
	);
	const buffer = useBuffer("textarea", cs, bufferCss);
	const styles = useMultiStyleConfig("FlushIconTextarea", {
		variant: isFocused ? state : "INACTIVE",
	});

	async function updateLines() {
		const count = await countLines<HTMLTextAreaElement>(
			textarea.current as HTMLTextAreaElement,
			buffer,
			cs
		);
		setLines(count);
	}

	useEffect(() => {
		if (buffer) {
			updateLines();
		}
	}, [value, width]);

	const showIcon = !value && (!isFocused || state === "INACTIVE");

	return (
		<MotionFlex __css={styles.container} role='group'>
			<StylesProvider value={styles}>
				<MotionFlex __css={styles.iconContainer} minH={calcHeight(lines, cs)}>
					{!showIcon && (
						<TextareaLineNumber
							max={lines}
							height={parseInt(cs.lineHeight) || parseInt(cs.fontSize)}
						/>
					)}
					{showIcon && <SVGWrapper SVG={IconLeft} styles={styles.icon} />}
				</MotionFlex>
				<MotionTextarea
					ref={textarea}
					name={name}
					wrap='hard'
					onChange={(e) => setValue(e.target.value)}
					placeholder={placeholder}
					__css={styles.textarea}
					minH={calcHeight(lines, cs)}
					onFocus={toggleFocus}
					onBlur={toggleFocus}
				/>
			</StylesProvider>
		</MotionFlex>
	);
}
