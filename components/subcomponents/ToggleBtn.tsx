//* Packages
import React from "react";
import { motion, Variants, AnimateSharedLayout } from "framer-motion";

interface Props {
  className: string;
  toggle(): void;
  state: boolean;
  switchClassName: string;
  containerVariants: Variants;
  switchOffVariants: Variants;
  switchOnVariants: Variants;
}

export default function ToggleBtn(props: Props) {
  return (
    <AnimateSharedLayout>
      <motion.button
        layout
        className={`${props.className}`}
        onClick={props.toggle}
        variants={props.containerVariants}
      >
        {!props.state && (
          <motion.span
            className={`${props.switchClassName}`}
            layoutId="toggle"
            variants={props.switchOffVariants}
          />
        )}
        {props.state && (
          <motion.span
            className={`${props.switchClassName}`}
            layoutId="toggle"
            variants={props.switchOnVariants}
          />
        )}
      </motion.button>
    </AnimateSharedLayout>
  );
}
