//* Packages
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
	useBoolean,
	useMultiStyleConfig,
	StylesProvider,
} from "@chakra-ui/react";

//* Components
import { Navtitle } from "./navtitle";
import { NavlinkContainer } from "./navlink-container";
import { MotionFlex, MotionNav } from "@components/framer";
import { MenuBtn } from "./menu-btn";
// import { FocusMenuSelector } from "./focus-menu-selector";

//* Static
import links from "@static/links";

interface Props {
	hideLinks: boolean;
}

export function Navigation({ hideLinks }: Props) {
	const router = useRouter();
	const [isOpen, setIsOpen] = useBoolean(false);
	const [hoverSelector, setHoverSelector] = useState(links[0].name);
	const [hovering, setHovering] = useBoolean(false);
	const linksVisible = (hideLinks && isOpen) || !hideLinks;

	// const linkContainer = useRef<HTMLElement>(null);
	// const link = useRef<HTMLElement>(null);

	useEffect(() => {
		if (hideLinks) setIsOpen.off();
	}, [hideLinks]);

	const styles = useMultiStyleConfig("Navigation", {
		variant: hideLinks && isOpen ? "navmenu" : "navbar",
		size: hideLinks && isOpen ? "isOpen" : "default",
	});

	return (
		<>
			<MotionNav
				sx={styles.container}
				transition={{
					type: "spring",
					bounce: 0.1,
					damping: 17,
				}}
				layout>
				<StylesProvider value={styles}>
					{/* {hideLinks && isOpen && (
						<FocusMenuSelector
							bgPosition={
								Math.floor(window.innerHeight / 2) +
								(linkContainer.current?.offsetTop || 0) +
								Math.floor((link.current?.scrollHeight || 0) / 2) +
								(link.current?.scrollHeight || 0) *
									links.findIndex(({ name }) => name === hoverSelector)
							}
						/>
					)} */}
					<MotionFlex sx={styles.position} layout>
						<MotionFlex
							alignItems='center'
							w='100%'
							justifyContent='space-between'
							layout>
							<Navtitle>devin jackson</Navtitle>
							{hideLinks && (
								<MenuBtn
									state={isOpen ? "open" : "closed"}
									toggleOpen={setIsOpen.toggle}
								/>
							)}
						</MotionFlex>
						{linksVisible && (
							<NavlinkContainer
								activeRoute={router.route}
								links={links}
								// linkRef={link}
								// linkContainerRef={linkContainer}
								closeOnLinkClick={() => setIsOpen.off()}
								hovering={hovering}
								setHovering={setHovering}
								hoverSelector={hoverSelector}
								setHoverSelector={setHoverSelector}
								shouldBeBlurred={hideLinks && isOpen}
							/>
						)}
					</MotionFlex>
				</StylesProvider>
			</MotionNav>
		</>
	);
}
