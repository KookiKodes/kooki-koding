import * as React from "react";
import { useStyles } from "@chakra-ui/react";
import { MotionSpan } from "../framer";

interface Props {
	hasHoveredLink: boolean;
	hovering: boolean;
}

export function HoverLinkSelector({ hasHoveredLink, hovering }: Props) {
	const styles = useStyles();

	return (
		<MotionSpan
			as='span'
			__css={styles.hoverLinkSelector}
			bg={hovering && hasHoveredLink ? "primary.500.70" : "transparent"}
			layoutId='hoverLink'
			transition={{ type: "spring", damping: 17 }}
		/>
	);
}
