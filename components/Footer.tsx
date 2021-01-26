//* Packages
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import IconContainer from "./subcomponents/IconContainer";

//* Styles
import footer from "../styles/Footer.module.sass";

//* Static
import icons from "./static/icons";
import footerVariants from "./variants/footerVariants";

export default function Footer() {
  const container = useAnimation();
  const { colors, themeName } = useThemedContext();

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <motion.div
      animate={container}
      className={footer.container}
      variants={footerVariants.footer(colors)}
    >
      <IconContainer icons={icons} />
      <h5>&copy; Devin Jackson 2020</h5>
    </motion.div>
  );
}
