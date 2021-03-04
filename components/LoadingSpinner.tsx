//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import SvgWrapper from "./Footer/SvgWrapper";
import LoadingDots from "./LoadingDots";

//* Variants
import loadingVariants from "@variants/LoadingSpinnerVariants";

//* Interfaces
import { LoadingSpinnerProps } from "@interfaces/LoadingSpinnerInterface";

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  const { colors, themeName } = useThemedContext();
  const container = useAnimation();

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <motion.div
      animate={container}
      variants={loadingVariants.loading(colors)}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <SvgWrapper
        path="utility/spinner2"
        initial="initial"
        variants={loadingVariants.spinner(colors, props.spinnerSize)}
        animate="rotate"
      />
      <motion.div className="flex mt-10 w-full items-center justify-center relative -right-10">
        <motion.h1 className="text-4xl flex">Loading</motion.h1>
        <motion.div className="relative -bottom-4">
          <LoadingDots num={3} size={props.dotSize} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
