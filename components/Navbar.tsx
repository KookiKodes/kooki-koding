//* Packages
import React from "react";
import { motion, useAnimation, useCycle } from "framer-motion";

//* Variants
import links from "./static/links";
import navbarVariants from "./variants/navbarVariants";

//* Components
import MenuBtn from "./subcomponents/MenuBtn";
import NavlinkContainer from "./subcomponents/NavlinkContainer";

//* Context
import { useThemedContext } from "kooki-components";

//* Style
import navigation from "../styles/Navigation.module.sass";

export default function Navbar() {
  const { themeName, colors } = useThemedContext();
  const container = useAnimation();
  const [navbarView, toggleNavbarView] = useCycle(false, true);
  const [disable, toggleDisable] = React.useState(false);

  React.useEffect(() => {
    if (navbarView) container.start("open");
    else container.start("closed");
  }, [navbarView]);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <motion.div
      layout
      className={navigation.navbar}
      animate={container}
      variants={navbarVariants(colors)}
      initial="closed"
      transition={{
        duration: 1,
        damping: 16,
        type: "spring",
      }}
      onAnimationStart={() => toggleDisable(true)}
      onAnimationComplete={() => toggleDisable(false)}
    >
      <MenuBtn toggleNavbar={() => toggleNavbarView()} isDisabled={disable} />
      <NavlinkContainer
        links={links}
        toggleNavbar={() => toggleNavbarView()}
        isOpen={navbarView}
      />
    </motion.div>
  );
}
