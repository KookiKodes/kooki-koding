//* Packages
import * as React from "react";
import { MotionFlex } from "../framer";
import { useStyles } from "@chakra-ui/react";

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
	hovering: boolean;
	shouldBeBlurred: boolean;
	setHovering: {
		readonly on: () => void;
		readonly off: () => void;
		readonly toggle: () => void;
	};
	hoverSelector: string;
	linkRef: React.RefObject<HTMLElement>;
	linkContainerRef?: React.RefObject<HTMLElement>;
	setHoverSelector: (str: string) => void;
	closeOnLinkClick: () => void;
}

export function NavlinkContainer({
	links,
	linkRef,
	linkContainerRef,
	activeRoute,
	hovering,
	setHovering,
	hoverSelector,
	setHoverSelector,
	shouldBeBlurred,
	closeOnLinkClick,
}: Props) {
	const styles = useStyles();
	return (
		<MotionFlex
			__css={styles.linkContainer}
			ref={linkContainerRef}
			variants={linkContainer}
			onHoverStart={setHovering.on}
			onHoverEnd={setHovering.off}
			initial='initial'
			animate='enter'
			transition={{ type: "spring", damping: 12, delay: 0.15 }}>
			{links.map((link, index) => {
				const hover = hoverSelector === link.name;
				return (
					<Navlink
						key={index}
						active={activeRoute === link.to}
						hoverSelector={hover}
						linkRef={hover ? linkRef : null}
						setHoverSelector={() => setHoverSelector(link.name)}
						hovering={hovering}
						blurAmount={shouldBeBlurred && !hover ? "blur(3.5px)" : "blur(0px)"}
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
