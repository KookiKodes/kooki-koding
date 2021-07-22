//* packages
import { useState, useRef, useEffect, MutableRefObject } from "react";
import { useMultiStyleConfig, StylesProvider } from "@chakra-ui/system";

//* components
import { MotionTextarea, MotionFlex, MotionLabel } from "@components/framer";
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
	maxLineCount = Infinity,
}: Props) {
	const [lines, setLines] = useState<number>(1);
	const value = useRef<string>("");
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

	function updateLines() {
		const count = countLines<HTMLTextAreaElement>(
			textarea.current as HTMLTextAreaElement,
			buffer,
			cs
		);
		if (count <= maxLineCount) setLines(count);
		if (textarea.current) {
			if (count > maxLineCount) textarea.current.value = value.current;
			else value.current = textarea.current.value;
		}
	}

	useEffect(() => {
		if (buffer) {
			updateLines();
		}
	}, [width]);

	const showIcon = () => {
		if (textarea.current) {
			return !textarea.current.value && (!isFocused || state === "INACTIVE");
		}
		return true;
	};

	return (
		<MotionFlex __css={styles.container} role='group'>
			<StylesProvider value={styles}>
				<MotionFlex
					__css={showIcon() ? styles.iconContainer : styles.lineContainer}
					minH={calcHeight(lines, cs)}>
					<MotionLabel htmlFor={name}>
						{!showIcon() && (
							<TextareaLineNumber
								max={lines}
								height={calcHeight(lines, cs)}
								cs={cs}
							/>
						)}
						{showIcon() && <SVGWrapper SVG={IconLeft} styles={styles.icon} />}
					</MotionLabel>
				</MotionFlex>
				<MotionTextarea
					ref={textarea}
					name={name}
					id={name}
					wrap='hard'
					onChange={() => updateLines()}
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
