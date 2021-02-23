import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";
import { withResizeDetector } from "react-resize-detector";

//* Components
import Footer from "./Footer";
import NavMenu from "./NavMenu";

//* Variants
import layoutVariants from "../lib/variants/layoutVariants";

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
      layout
      className="flex flex-col items-center justify-start w-screen h-screen overflow-x-hidden min-h-px-800 min-w-min"
      initial="theme"
      animate={container}
      variants={layoutVariants(colors)}
    >
      <NavMenu />
      {children}
      <Footer />
    </motion.main>
  );
}

export default Layout;
