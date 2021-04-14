import React from "react";
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import Footer from "./Footer";
import NavMenu from "./NavMenu";

//* Variants
import layoutVariants from "@variants/layoutVariants";

interface LayoutProps {
	children: JSX.Element | JSX.Element[];
	width?: number;
	height?: number;
}

function Layout({ children }: LayoutProps) {
	const { colors, themeName } = useThemedContext();
	const container = useAnimation();

	React.useEffect(() => {
		container.start("theme");
	}, [themeName]);

	return (
		<motion.main
			className='flex flex-col items-center justify-start w-screen h-auto min-h-screen overflow-x-hidden min-w-max'
			initial='theme'
			animate={container}
			variants={layoutVariants(colors)}>
			<AnimateSharedLayout>
				<NavMenu />
				{children}
				<Footer />
			</AnimateSharedLayout>
		</motion.main>
	);
}

export default Layout;
