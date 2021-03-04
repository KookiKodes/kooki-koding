//* Packages
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";

interface Props {
  path: string;
  variants?: Variants;
  animate?: string | object;
  initial?: string | object;
}

export default function SvgWrapper(props: Props) {
  const SvgComponent = dynamic(() =>
    import(`../../lib/icons/${props.path}.svg`).then(
      (mod) => mod.ReactComponent
    )
  );

  return (
    <motion.span
      initial={props.initial}
      animate={props.animate}
      variants={props.variants}
    >
      <SvgComponent />
    </motion.span>
  );
}
