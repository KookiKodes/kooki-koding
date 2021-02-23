//* Packages
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import IconContainer from "./Footer/IconContainer";

//* Static
import icons from "../lib/static/icons";
import footerVariants from "./Footer/footerVariants";

export default function Footer() {
  const container = useAnimation();
  const { colors, themeName } = useThemedContext();

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <motion.footer
      animate={container}
      className="relative bottom-0 z-10 flex flex-col items-center self-end justify-center w-full p-6 text-lg"
      variants={footerVariants.footer(colors)}
    >
      <IconContainer icons={icons} />
      <h5>&copy; Devin Jackson 2020</h5>
    </motion.footer>
  );
}
