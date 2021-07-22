//* packages
import { useMultiStyleConfig, StylesProvider } from "@chakra-ui/react";
import * as React from "react";

//* components
import {
	MotionInputLeftIcon,
	MotionLabel,
	MotionInputRightIcon,
	MotionInput,
	MotionInputGroup,
} from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* interfaces
import { FlushIconInputProps as Props } from "@interfaces/form/FlushIconInput";
import { ContactFormStateTypes as State } from "@interfaces/form/ContactForm";

export function FlushIconInput(props: Props) {
	const styles = useMultiStyleConfig("FlushIconInput", {
		variant: props.isFocused ? props.state : "INACTIVE",
	});
	return (
		<MotionInputGroup __css={styles.container}>
			<StylesProvider value={styles}>
				{props.IconLeft && (
					<MotionLabel htmlFor={props.name}>
						<MotionInputLeftIcon __css={styles["icon-left-box"]}>
							<SVGWrapper SVG={props.IconLeft} styles={styles["icon-left"]} />
						</MotionInputLeftIcon>
					</MotionLabel>
				)}
				<MotionInput
					__css={styles.input}
					name={props.name}
					id={props.name}
					type={props.type}
					placeholder={props.placeholder}
					onFocus={props.toggleFocus}
					onBlur={props.toggleFocus}
				/>
				{/*props.iconRight && (
          <MotionInputRightIcon __css={styles["icon-right-box"]}>
            <SVGWrapper SVG={IconRight} styles={styles["icon-right"]} />
          </MotionInputRightIcon>
        ) */}
			</StylesProvider>
		</MotionInputGroup>
	);
}
