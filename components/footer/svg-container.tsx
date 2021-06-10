//* Packages
import * as React from "react";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionBox } from "@components/framer";
import { SvgWrapper } from "./svg-wrapper";

interface Svg {
	name: string;
	filename: string;
	href: string;
}

interface Props {
	Svgs: Svg[];
	hovering: boolean;
	hoveredLink: string;
	setHoveredLink: (name: string) => void;
}

export function SvgContainer({
	Svgs,
	hoveredLink,
	setHoveredLink,
	hovering,
}: Props) {
	const styles = useStyles();

	return (
		<MotionBox __css={styles.svgContainer} layout>
			{Svgs.map((props, index: number) => {
				return (
					<SvgWrapper
						key={index}
						hovering={hovering}
						hoveredLink={hoveredLink === props.name}
						setHoveredLink={() => setHoveredLink(props.name)}
						{...props}
					/>
				);
			})}
		</MotionBox>
	);
}
