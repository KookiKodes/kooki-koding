//* Packages
import * as React from "react";
import { MotionFlex } from "../framer";
import { useBoolean, useStyles } from "@chakra-ui/react";

//* Component
import { Navlink } from "./navlink";

//* Variants
import { linkContainer } from "@variants/navbarVariants";

interface Link {
	name: string;
	to: string;
}

interface Props {
	links: Link[];
	activeRoute: string;
	closeOnLinkClick: () => void;
}

export function NavlinkContainer({
	links,
	activeRoute,
	closeOnLinkClick,
}: Props) {
	const [hoverSelector, setHoverSelector] = React.useState("");
	const [hovering, setHovering] = useBoolean(false);
	const styles = useStyles();

	return (
		<MotionFlex
			sx={styles.linkContainer}
			variants={linkContainer}
			onHoverStart={setHovering.on}
			onHoverEnd={setHovering.off}
			initial='initial'
			animate='enter'
			transition={{ type: "spring", damping: 12, delay: 0.15 }}>
			{links.map((link, index) => {
				return (
					<Navlink
						key={index}
						active={activeRoute === link.to}
						hoverSelector={hoverSelector === link.name}
						setHoverSelector={() => setHoverSelector(link.name)}
						hovering={hovering}
						onClick={(e) => {
							if (activeRoute === link.to) e.preventDefault();
							else
								setTimeout(() => {
									closeOnLinkClick();
								}, 600);
						}}
						{...link}
					/>
				);
			})}
		</MotionFlex>
	);
}
