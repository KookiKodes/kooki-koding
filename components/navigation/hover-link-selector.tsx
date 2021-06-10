import * as React from "react";
import { ChakraComponent, ChakraProps, useStyles } from "@chakra-ui/react";
import { MotionBoxProps, MotionSpan } from "../framer";

interface Props {
	hasHoveredLink: boolean;
	hovering: boolean;
	layoutId: string;
}

export function HoverLinkSelector({
	hasHoveredLink,
	hovering,
	layoutId,
}: Props) {
	const styles = useStyles();

	return (
		<MotionSpan
			__css={styles.hoverLinkSelector}
			color={hovering && hasHoveredLink ? "accent.400.50" : "transparent"}
			layoutId={layoutId}
			transition={{ type: "spring", damping: 17 }}
		/>
	);
}
