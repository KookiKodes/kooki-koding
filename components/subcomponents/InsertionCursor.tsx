//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";

//* Variants
import typewriterVariants from "@components/variants/typewriterVariants";

//* Styles
import typewriter from "../../styles/Typewriter.module.sass";
import { useThemedContext } from "kooki-components";

//* Interfaces
import { CursorProps } from "../interfaces/Typewriter";

export default function InsertionCursor(props: CursorProps) {
  const container = useAnimation();
  const { colors, themeName } = useThemedContext();

  React.useEffect(() => {
    if (props.isTyping) container.start("typing");
    else container.start("stationary");
  }, [props.isTyping]);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <motion.div
      className={typewriter.insertion_cursor}
      variants={typewriterVariants.cursor(colors)}
      animate={container}
    />
  );
}
