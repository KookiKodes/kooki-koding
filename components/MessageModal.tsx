//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Variants
import messageModalVariants from "./MessageModal/messageModalVariants";

interface Props {
  message: string[];
  removeMessage(): void;
}

export default function MessageModal({ message, removeMessage }: Props) {
  const { colors, themeName } = useThemedContext();
  const container = useAnimation();
  const [mess, error] = message;

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  React.useEffect(() => {
    container.start("visible");
  });

  return (
    <motion.div
      initial="initial"
      animate={container}
      variants={messageModalVariants.container(colors)}
      className="absolute z-10 flex flex-col items-center self-center justify-center w-3/4 shadow-xl lg:w-1/2 h-1/4 rounded-b-xl"
      exit="hidden"
      onClick={() => removeMessage()}
    >
      <motion.button className="box-border absolute top-0 z-10 flex items-center self-end justify-center mt-2 mr-2 text-xl font-extrabold rounded-full shadow-md w-9 h-9 lg:text-2xl focus:outline-none">
        X
      </motion.button>
      <motion.h1 className="relative flex items-center self-start justify-start w-full px-8 text-3xl font-semibold border-b border-current shadow-sm lg:text-4xl h-2/6">
        {error ? "Message Unsuccessful!" : "Message Sent!"}
      </motion.h1>
      <motion.h3 className="w-full px-8 text-2xl font-light text-left lg:text-4xl h-1/2">
        {error || mess}
      </motion.h3>
      <motion.div
        className="w-full h-12 border-t border-current rounded-b-xl"
        initial={{ background: colors.prim.darken(1).color }}
      />
    </motion.div>
  );
}
