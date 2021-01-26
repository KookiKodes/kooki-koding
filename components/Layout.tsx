import React from "react";
import { motion } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import Footer from "./Footer";
import Navigation from "./Navigation";

//* Variants
import layoutVariants from "./variants/layoutVariants";

//* Styles
import styles from "../styles/Layout.module.sass";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: LayoutProps) {
  const { colors } = useThemedContext();

  return (
    <motion.main
      className={styles.layout}
      initial="theme"
      animate="theme"
      variants={layoutVariants(colors)}
    >
      <Navigation />
      {children}
      <Footer />
    </motion.main>
  );
}
