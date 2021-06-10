//* Packages
import * as React from "react";
import NextLink from "next/link";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionLinkOverlay, MotionSpan } from "../framer";
import { ActiveLinkSelector } from "./active-link-selector";
import { HoverLinkSelector } from "./hover-link-selector";

interface Props {
	linkRef: React.RefObject<HTMLElement> | null;
	name: string;
	to: string;
	active: boolean;
	hovering: boolean;
	hoverSelector: boolean;
	blurAmount: string;
	setHoverSelector: () => void;
	onClick: (e: React.MouseEvent) => void;
}

export function Navlink({
	name,
	linkRef,
	to,
	active,
	hovering,
	hoverSelector,
	setHoverSelector,
	blurAmount,
	onClick,
}: Props) {
	const styles = useStyles();
	const link = React.useRef<HTMLElement | null>(null);

	React.useEffect(() => {
		// console.log(link.current?.offsetTop);
	}, []);

	return (
		<NextLink href={to}>
			<MotionLinkOverlay
				ref={linkRef}
				onClick={onClick}
				__css={styles.link}
				cursor={active ? "default" : "pointer"}
				onHoverStart={setHoverSelector}
				onFocus={setHoverSelector}
				animate={{ filter: blurAmount }}
				transition={{ duration: 0.45 }}
				zIndex='10'
				layout>
				{active && (
					<ActiveLinkSelector link={name} charLeft='[' charRight=']' />
				)}
				<MotionSpan zIndex='20'>{name}</MotionSpan>
				{hoverSelector && (
					<HoverLinkSelector
						hasHoveredLink={hoverSelector}
						hovering={hovering}
						layoutId='navlinkHover'
					/>
				)}
			</MotionLinkOverlay>
		</NextLink>
	);
}
