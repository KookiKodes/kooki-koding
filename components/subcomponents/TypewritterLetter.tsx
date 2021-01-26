//* Packages
import React from "react";
import { motion } from "framer-motion";

//* Variants
import typewriterVariants from "@components/variants/typewriterVariants";

//* Styles
import typewriter from "../../styles/Typewriter.module.sass";

//* Interfaces
import { LetterProps } from "../interfaces/Typewriter";

export default function TypewriterLetter(props: LetterProps) {
  return (
    <motion.p
      className={typewriter.letter}
      initial="initial"
      variants={typewriterVariants.letter(props.colors)}
      transition={{ duration: 0.05 }}
    >
      {props.letter}
    </motion.p>
  );
}
