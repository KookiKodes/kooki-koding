//* packages
import { ChangeEvent, useState, useRef, useEffect } from "react";
import {
	useMultiStyleConfig,
	StylesProvider,
	useTheme,
} from "@chakra-ui/system";
import { useAnimation } from "framer-motion";

//* components
import { MotionTextarea, MotionFlex } from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* interfaces
import { FlushIconTextareaProps as Props } from "@interfaces/form/FlushIconTextarea";

//* helpers
import { countLines } from "@helper/countLines";
import { TextareaLineNumber } from "./textarea-line-number";

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
	const textarea = useRef<HTMLTextAreaElement | null>(null);
	const buffer = null;
	const fontInfo = useRef<string>("");

	const styles = useMultiStyleConfig("FlushIconTextarea", {
		variant: isFocused ? state : "INACTIVE",
	});

	const theme = useTheme();

	useEffect(() => {
		fontInfo.current = `${theme.fonts.heading} ${theme.fontSizes["2xl"]}`;
	}, []);

	async function updateLines() {
		const count = await countLines(
			textarea.current as HTMLTextAreaElement,
			buffer
		);
		setLines(count);
	}

	useEffect(() => {
		updateLines();
	}, [value]);

	//Need to update "lines" when window is resized;
	useEffect(() => {
		console.log(textarea.current?.clientWidth);
	}, [textarea.current?.clientWidth]);

	const showIcon = !value && (!isFocused || state === "INACTIVE");

	return (
		<MotionFlex __css={styles.container} role='group'>
			<StylesProvider value={styles}>
				<MotionFlex __css={styles.iconContainer} minH={lines * 33 + 16}>
					{!showIcon && <TextareaLineNumber max={lines} height={33} />}
					{showIcon && <SVGWrapper SVG={IconLeft} styles={styles.icon} />}
				</MotionFlex>
				<MotionTextarea
					ref={textarea}
					name={name}
					wrap='hard'
					onChange={(e) => setValue(e.target.value)}
					placeholder={placeholder}
					__css={styles.textarea}
					minH={lines * 33 + 16}
					onFocus={toggleFocus}
					onBlur={toggleFocus}
				/>
			</StylesProvider>
		</MotionFlex>
	);
}
