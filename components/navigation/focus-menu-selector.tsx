//* Packages
import * as React from "react";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionBox } from "@components/framer";
// (windowHeight / 2) + (linkContainerOffest) + ((linkHeight / 2) + (linkHeight * linkIndex)
interface Props {
	bgPosition: number;
}

export function FocusMenuSelector({ bgPosition }: Props) {
	const styles = useStyles();
	return (
		<MotionBox
			__css={styles.focusHoverSelector}
			animate={{ backgroundPosition: `0 ${bgPosition}px` }}
			transition={{ type: "spring", damping: 15 }}
		/>
	);
}
