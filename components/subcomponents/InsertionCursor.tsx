//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Variants
import typewriterVariants from "@components/variants/typewriterVariants";

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
      className="inline-block w-0.5 h-7 rounded-full"
      variants={typewriterVariants.cursor(colors)}
      animate={container}
    />
  );
}
