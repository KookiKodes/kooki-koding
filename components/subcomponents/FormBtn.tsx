//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Variants
import formVariants from "../variants/formVariants";

//* Interfaces
import { FBtn } from "../interfaces/Form";

export default function FormBtn(props: FBtn) {
  const container = useAnimation();
  const { colors, themeName } = useThemedContext();

  // console.log(props.isDisabled);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <motion.div
      variants={formVariants.inputContainer(colors)}
      className="flex items-center justify-center w-full h-auto row-start-4 xl:row-start-3 col-span-full"
    >
      <motion.button
        animate={container}
        variants={formVariants.submit(colors)}
        disabled={props.isDisabled}
        className="w-full text-2xl font-semibold border-2 border-current rounded-full xl:w-2/6 h-14 focus:shadow-lg focus:outline-none disabled:opacity-50 disabled:cursor-default"
        whileHover={`${props.isDisabled ? " " : "hover"}`}
        onFocus={() => container.start(props.isDisabled ? " " : "hover")}
        onBlur={() => container.start(props.isDisabled ? " " : "theme")}
      >
        Submit
      </motion.button>
    </motion.div>
  );
}
