//* Packages
import * as React from "react";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionBox } from "@components/framer";
import { SVGLinkWrapper } from "@components/footer/svg-link-wrapper";

//* Interfaces
import SvgContainerProps from "@interfaces/footer/SvgContainer";

export function SvgContainer({
	Svgs,
	hoveredLink,
	setHoveredLink,
	hovering,
	setHovering,
}: SvgContainerProps) {
	const styles = useStyles();

	return (
		<MotionBox __css={styles.svgContainer} layout>
			{Svgs.map((props, index: number) => {
				return (
					<SVGLinkWrapper
						key={index}
						hovering={hovering}
						hoveredLink={hoveredLink === props.name}
						setHoveredLink={() => setHoveredLink(props.name)}
						setFocus={() => {
							setHovering.on();
							setHoveredLink(props.name);
						}}
						setBlur={() => {
							setHovering.off();
						}}
						{...props}
					/>
				);
			})}
		</MotionBox>
	);
}
