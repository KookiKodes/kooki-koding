//* Packages
import React from "react";
import { motion, useAnimation, useIsPresent } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Variants
import variants from "../lib/variants/pageVariants";

//* Styles
import general from "../styles/general.module.sass";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function Page({ children }: Props) {
  const present = useIsPresent();
  const container = useAnimation();
  const { colors, themeName } = useThemedContext();

  React.useEffect(() => {
    if (present) container.start("visible");
    else container.start("hidden");
  }, [present]);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <>
      {present && (
          <motion.div
            initial="initial"
            className="relative flex flex-col items-center w-full h-full p-0 mb-12 text-center"
            variants={variants(colors)}
            animate={container}
            exit="hidden"
          >
            {children}
          </motion.div>
      )}
    </>
  );
}
