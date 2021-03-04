//* Packages
import React from "react";
import { motion } from "framer-motion";

//* Variants
import typewriterVariants from "@variants/typewriterVariants";

//* Interfaces
import { LetterProps } from "@interfaces/TypewriterInterface";

export default function TypewriterLetter(props: LetterProps) {
  return (
    <motion.p
      className="inline text-4xl font-medium"
      initial="initial"
      variants={typewriterVariants.letter(props.colors)}
      transition={{ duration: 0.05 }}
    >
      {props.letter}
    </motion.p>
  );
}
