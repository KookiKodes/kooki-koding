//* Packages
import * as React from "react";
import dynamic from "next/dynamic";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionLinkOverlay, MotionIcon } from "@components/framer";
import { HoverLinkSelector } from "@components/navigation/hover-link-selector";

//* Interfaces
import SvgProps from "@interfaces/footer/Svg";

export function SvgWrapper({
	href,
	filename,
	hovering,
	hoveredLink,
	setHoveredLink,
	setFocus,
	setBlur,
}: SvgProps) {
	const Svg = dynamic(() => import(`../../lib/icons/socials/${filename}.svg`));
	const styles = useStyles();
	return (
		<MotionLinkOverlay
			href={href}
			target='_blank'
			onHoverStart={setHoveredLink}
			__css={styles.svgWrapper}
			onFocus={setFocus}
			onBlur={setBlur}
			layout>
			{hoveredLink && (
				<HoverLinkSelector
					hasHoveredLink={hoveredLink}
					hovering={hovering}
					layoutId='footerSvgHover'
					color='primary.500.80'
				/>
			)}
			<MotionIcon __css={styles.svg} layout>
				<Svg />
			</MotionIcon>
		</MotionLinkOverlay>
	);
}
