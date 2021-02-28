//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import LoadingDots from "../LoadingDots";

//* Variants
import formVariants from "./formVariants";

//* Interfaces
import { FBtn } from "./FormInterface";

export default function FormBtn(props: FBtn) {
  const container = useAnimation();
  const { colors, themeName } = useThemedContext();

  // console.log(props.isDisabled);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  React.useEffect(() => {
    if (props.isLoading) container.start("loading");
    else container.start("initial");
  }, [props.isLoading]);

  return (
    <motion.div
      variants={formVariants.inputContainer(colors)}
      className="flex items-center justify-center w-full h-auto row-start-4 xl:row-start-3 col-span-full"
    >
      <motion.button
        initial="intial"
        animate={container}
        variants={formVariants.submit(colors)}
        disabled={props.isDisabled}
        className="w-full relative overflow-hidden text-2xl font-semibold border-2 border-current rounded-full xl:w-2/6 h-14 focus:shadow-lg focus:outline-none disabled:opacity-50 disabled:cursor-default"
        whileHover={`${props.isDisabled ? " " : "hover"}`}
        onFocus={() => container.start(props.isDisabled ? " " : "hover")}
        onBlur={() => container.start(props.isDisabled ? " " : "theme")}
        onClick={() => container.start("theme")}
      >
        {!props.isLoading ? "Submit" : <LoadingDots num={3} size={0.75} />}
      </motion.button>
    </motion.div>
  );
}
