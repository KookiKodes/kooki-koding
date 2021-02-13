//* Packages
import React from "react";
import { motion, Transition, useAnimation, Variant } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import Dot from "./LoadingDots/Dot";

//* Variants
import loadingDotVariants from "./LoadingDots/loadingDotVariants";

//* Interfaces
import { LoadingDotProps } from "./LoadingDots/LoadingDotsInterface";

export default function loadingDots(props: LoadingDotProps) {
  const { colors, themeName } = useThemedContext();
  const container = useAnimation();

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  React.useEffect(() => {
    container.start("loading");
  });

  return (
    <motion.div
      initial="initial"
      animate={container}
      variants={loadingDotVariants.container(colors)}
      className="flex items-center justify-center w-full h-full"
    >
      {new Array(props.num).fill(1).map((dot, index) => {
        return <Dot key={index} colors={colors} />;
      })}
    </motion.div>
  );
}
