import React from "react";
import { motion } from "framer-motion";
import { useThemedContext } from "kooki-components";
import { withResizeDetector } from "react-resize-detector";

//* Components
import Footer from "./Footer";
import NavMenu from "./NavMenu";

//* Variants
import layoutVariants from "./variants/layoutVariants";


interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  width?: number;
  height?: number;
}

function Layout({ children, width, height }: LayoutProps) {
  const { colors } = useThemedContext();

  return (
    <motion.main
      layout
      className="flex flex-col w-screen h-screen overflow-x-hidden"
      initial="theme"
      animate="theme"
      variants={layoutVariants(colors)}
    >
      <NavMenu />
      {children}
      <Footer />
    </motion.main>
  );
}


export default Layout;
