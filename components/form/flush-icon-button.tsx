//* packages
import { useMultiStyleConfig } from "@chakra-ui/react";
import {useEffect} from "react";

//* components
import {
	MotionButton,
	MotionButtonGroup,
	MotionIconButton,
	MotionSpan,
} from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* hooks
import useComponentState from "@hooks/useComponentState";

//* interfaces
import { FlushIconButtonProps as Props } from "@interfaces/form/FlushIconButton";

export function FlushIconButton({
	name,
	state,
	children,
	submitFn,
	IconRight,
	disabled,
	toggleFocus,
}: Props) {
	const [mod, modUtils] = useComponentState("", ["hover", "focus", "disabled"]);
	const styles = useMultiStyleConfig("FlushIconButton", {
		variant: `${state}&${mod}`,
	});
	
	useEffect(() => {
		if (disabled) modUtils.on.disabled();	
		else modUtils.off.disabled();
	}, [disabled])
	

	return (
		<MotionButton
			__css={styles.button}
			name={name}
			role="group"
			type='submit'
			onClick={submitFn}
			disabled={disabled}
			onFocus={(e) => {toggleFocus(e), modUtils.on.focus()}}
			onBlur={(e) => {toggleFocus(e), modUtils.off.focus()}}
			onHoverStart={modUtils.on.hover}
			onHoverEnd={modUtils.off.hover}
			arial-label='submit'>
			{children}
			<MotionSpan __css={styles.iconContainer}>
				<SVGWrapper SVG={IconRight} styles={styles.icon} />
			</MotionSpan>
		</MotionButton>
	);
}
