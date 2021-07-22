//* packages
import { useMultiStyleConfig } from "@chakra-ui/react";

//* components
import {
	MotionButton,
	MotionButtonGroup,
	MotionIconButton,
	MotionSpan,
} from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* interfaces
import { FlushIconButtonProps as Props } from "@interfaces/form/FlushIconButton";

export function FlushIconButton({
	name,
	state,
	children,
	submitFn,
	IconRight,
	disabled,
	isFocusing,
	toggleFocus,
}: Props) {
	const styles = useMultiStyleConfig("FlushIconButton", {
		variant: !isFocusing ? "INACTIVE" : state,
	});

	return (
		<MotionButton
			__css={styles.button}
			name={name}
			role={disabled ? "" : "group"}
			type='submit'
			onClick={submitFn}
			disabled={disabled}
			onFocus={toggleFocus}
			onBlur={toggleFocus}
			arial-label='submit'>
			{children}
			<MotionSpan __css={styles.iconContainer}>
				<SVGWrapper SVG={IconRight} styles={styles.icon} />
			</MotionSpan>
		</MotionButton>
	);
}
