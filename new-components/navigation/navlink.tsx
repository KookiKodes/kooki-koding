//* Packages
import * as React from "react";
import NextLink from "next/link";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionLinkOverlay, MotionSpan } from "../framer";
import { ActiveLinkSelector } from "./active-link-selector";
import { HoverLinkSelector } from "./hover-link-selector";

interface Props {
	name: string;
	to: string;
	active: boolean;
	hovering: boolean;
	hoverSelector: boolean;
	setHoverSelector: () => void;
	onClick: (e: React.MouseEvent) => void;
}

export function Navlink({
	name,
	to,
	active,
	hovering,
	hoverSelector,
	setHoverSelector,
	onClick,
}: Props) {
	const styles = useStyles();

	return (
		<NextLink href={to}>
			<MotionLinkOverlay
				onClick={onClick}
				__css={styles.link}
				cursor={active ? "default" : "pointer"}
				onHoverStart={setHoverSelector}>
				{active && (
					<ActiveLinkSelector link={name} charLeft='[' charRight=']' />
				)}
				<MotionSpan zIndex='10'>{name}</MotionSpan>
				{hoverSelector && (
					<HoverLinkSelector
						hasHoveredLink={hoverSelector}
						hovering={hovering}
					/>
				)}
			</MotionLinkOverlay>
		</NextLink>
	);
}
