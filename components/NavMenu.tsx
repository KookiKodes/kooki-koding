//* Packages
import React from "react";
import { motion, useAnimation, useCycle, useIsPresent } from "framer-motion";

//* Variants
import links from "@static/links";
import navbarVariants from "@variants/navmenuVariants";

//* Components
import MenuBtn from "./NavMenu/MenuBtn";
import NavlinkContainer from "./NavMenu/NavlinkContainer";

//* Context
import { useThemedContext } from "kooki-components";

export default function NavMenu() {
  const { themeName, colors } = useThemedContext();
  const isPresent = useIsPresent();
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
    <motion.nav
      className="fixed z-20 flex flex-col self-start w-4 h-screen"
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
      exit="exit"
    >
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
