//* Packages
import * as React from "react";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionSpan } from "../framer";

//* Interfaces
import HoverLinkSelectorProps from "@interfaces/navigation/HoverLinkSelector";

export function HoverLinkSelector({
	hasHoveredLink,
	hovering,
	layoutId,
	color,
}: HoverLinkSelectorProps) {
	const styles = useStyles();

	return (
		<MotionSpan
			__css={styles.hoverLinkSelector}
			color={hovering && hasHoveredLink ? color : "transparent"}
			layoutId={layoutId}
			transition={{ type: "spring", damping: 17 }}
		/>
	);
}
