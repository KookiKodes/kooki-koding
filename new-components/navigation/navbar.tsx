//* Packages
import React, { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import {
	AnimatePresence,
	AnimateSharedLayout,
	useAnimation,
} from "framer-motion";
import {
	useBoolean,
	useStyleConfig,
	useBreakpoint,
	Portal,
} from "@chakra-ui/react";

//* Components
import { MotionFlex, MotionNav } from "../framer";
import { NavlinkContainer } from "./navlink-container";
import { Navtitle } from "./navtitle";
import { MenuBtn } from "./menu-btn";
import { Menu } from "./menu";

const hideLinksOn = ["base", "sm"];
const hideMenuBtnOn = ["md", "lg", "xl", "2xl"];

export function Navbar() {
	const { route } = useRouter();

	const styles = useStyleConfig("Navbar");
	const [isOpen, setIsOpen] = useBoolean(false);
	const [disabled, setDisabled] = useBoolean(false);

	const navBarRef = React.useRef(null);
	const menuRef = React.useRef(null);

	const breakpoint = useBreakpoint();

	return (
		<AnimateSharedLayout>
			<Portal containerRef={!isOpen ? navBarRef : menuRef}>
				<MotionNav all='inherit' display='flex'>
					{!hideMenuBtnOn.includes(breakpoint as string) && (
						<MenuBtn
							state={isOpen ? "open" : "closed"}
							toggleOpen={() => (!disabled ? setIsOpen.toggle() : "")}
						/>
					)}
					<Navtitle />
					{!hideLinksOn.includes(breakpoint as string) && (
						<NavlinkContainer
							activeRoute={route}
							links={[
								{ name: "home", to: "/" },
								{ name: "contact", to: "/contact" },
								{ name: "projects", to: "/projects" },
							]}
						/>
					)}
				</MotionNav>
			</Portal>
			<MotionFlex sx={styles}>
				<MotionFlex
					w='100%'
					maxW='1080px'
					h='100%'
					alignItems='center'
					justifyContent='space-between'
					px='1rem'
					ref={navBarRef}
					layout
				/>
			</MotionFlex>
			{!hideMenuBtnOn.includes(breakpoint as string) && (
				<Menu menuRef={menuRef}></Menu>
			)}
		</AnimateSharedLayout>
	);
}
