//* Packages
import React from "react";
import { motion } from "framer-motion";

//* Variants
import loadingDotVariants from "./loadingDotVariants";

//* Interfaces
import { DotInterface } from "./LoadingDotsInterface";

export default function Dot({ colors, size }: DotInterface) {
  return (
    <motion.span
      initial="initial"
      variants={loadingDotVariants.dot(colors, size)}
      className="m-2 rounded-full"
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
}
