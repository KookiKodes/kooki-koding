//* Packages
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, useAnimation, useCycle } from "framer-motion";

//* Variants
import links from "@static/links";
import navbarVariants from "@variants/navmenuVariants";

//* Components
import MenuBtn from "./MenuBtn";
import NavlinkContainer from "./NavlinkContainer";

//* Context
import { useThemedContext } from "kooki-components";

export default function NavMenu() {
	const { themeName, colors } = useThemedContext();
	const router = useRouter();
	const container = useAnimation();
	const [navbarView, toggleNavbarView] = useCycle(false, true);
	const [disable, toggleDisable] = useState(false);

	useEffect(() => {
		if (navbarView) {
			container.start("open");
			const availRoutes = ["/contact", "/", "/projects"];
			if (availRoutes.includes(router.route)) {
				availRoutes.forEach((route) => {
					if (route !== router.route) {
						router.prefetch(route);
					}
				});
			}
		} else container.start("closed");
	}, [navbarView, router.route]);

	useEffect(() => {
		container.start("theme");
	}, [themeName]);

	return (
		<motion.nav
			layout
			className='fixed z-20 flex flex-col self-start w-4 h-screen'
			animate={container}
			variants={navbarVariants(colors)}
			initial='closed'
			transition={{
				duration: 1,
				damping: 16,
				type: "spring",
			}}
			onAnimationStart={() => toggleDisable(true)}
			onAnimationComplete={() => toggleDisable(false)}
			exit='exit'>
			<MenuBtn
				toggleNavbar={() => toggleNavbarView()}
				isDisabled={disable}
				isOpen={navbarView}
			/>
			<NavlinkContainer
				links={links}
				toggleNavbar={() => toggleNavbarView()}
				isOpen={navbarView}
			/>
		</motion.nav>
	);
}
