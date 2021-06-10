//* Packages
import * as React from "react";
import dynamic from "next/dynamic";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionLinkOverlay, MotionIcon } from "@components/framer";
import { HoverLinkSelector } from "@components/navigation/hover-link-selector";

interface Props {
	name: string;
	href: string;
	filename: string;
	hovering: boolean;
	hoveredLink: boolean;
	setHoveredLink: () => void;
}

export function SvgWrapper({
	href,
	filename,
	hovering,
	hoveredLink,
	setHoveredLink,
}: Props) {
	const Svg = dynamic(() => import(`../../lib/icons/socials/${filename}.svg`));
	const styles = useStyles();
	return (
		<MotionLinkOverlay
			href={href}
			target='_blank'
			onHoverStart={setHoveredLink}
			__css={styles.svgWrapper}
			layout>
			{hoveredLink && (
				<HoverLinkSelector
					hasHoveredLink={hoveredLink}
					hovering={hovering}
					layoutId='footerSvgHover'
				/>
			)}
			<MotionIcon __css={styles.svg} layout>
				<Svg />
			</MotionIcon>
		</MotionLinkOverlay>
	);
}
