//* Packages
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";

interface Props {
  path: string;
  size: number;
  variants?: Variants;
  animate?: string;
  initial?: string;
}

export default function SvgWrapper(props: Props) {
  const SvgComponent = dynamic(() =>
    import(`../../lib/icons/${props.path}.svg`).then((mod) => mod.ReactComponent)
  );

  
  return (
    <motion.div className={`h-${props.size} w-${props.size}`} initial={props.initial} animate={props.animate} variants={props.variants}>
      <SvgComponent />
    </motion.div>
  );
}
