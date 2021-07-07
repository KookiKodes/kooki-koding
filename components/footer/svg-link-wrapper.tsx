//* Packages
import * as React from "react";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionLinkOverlay } from "@components/framer";
import { HoverLinkSelector } from "@components/navigation/hover-link-selector";
import {SVGWrapper} from "@components/utilities/svg-wrapper";

//* Interfaces
import SvgProps from "@interfaces/footer/Svg";

export function SVGLinkWrapper({
	href,
	SVG,
	hovering,
	hoveredLink,
	setHoveredLink,
	setFocus,
	setBlur,
}: SvgProps) {
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
			<SVGWrapper SVG={SVG} styles={styles.svg} />
		</MotionLinkOverlay>
	);
}
