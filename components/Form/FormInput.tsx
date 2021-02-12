//* Packages
import React from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Variants
import formVariants from "./formVariants";

//* Interfaces
import { FInput } from "@components/Form/FormInterface";

export default function FormInput(props: FInput) {
  const { colors } = useThemedContext();
  const container = useAnimation();

  if (props.inputInfo === "input") {
    return (
      <motion.div
        layout="position"
        variants={formVariants.inputContainer(colors)}
        className="relative flex flex-col self-center justify-center w-full h-auto col-span-1 xl:justify-end"
      >
        <motion.label className="self-start mb-4 text-2xl" htmlFor={props.uid}>
          {props.label}
        </motion.label>
        <motion.input
          name={props.uid}
          id={props.uid}
          autoComplete={props.autocomplete}
          animate={container}
          type={props.type}
          initial="initial"
          variants={formVariants.input(colors)}
          placeholder={props.placeholder}
          whileHover="hover"
          onChange={props.onChange}
          onKeyUp={props.validation}
          onFocus={() => container.start("focus")}
          onBlur={() => container.start("initial")}
          className="z-10 w-full h-8 p-4 text-xl placeholder-current border rounded-lg placeholder-opacity-30 lg:text-3xl focus:outline-none lg:h-14 focus:shadow-lg"
          required
        />
        <AnimatePresence>
          {props.error && (
            <ErrorMessage
              key={props.uid}
              message={props.error}
              colors={colors}
            />
          )}
        </AnimatePresence>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        layout="position"
        variants={formVariants.inputContainer(colors)}
        className="relative flex flex-col self-center justify-center w-full h-auto xl:justify-end col-span-full"
      >
        <motion.label className="self-start mb-4 text-2xl" htmlFor={props.uid}>
          {props.label}
        </motion.label>
        <motion.textarea
          name={props.uid}
          id={props.uid}
          animate={container}
          autoComplete={props.autocomplete}
          initial="initial"
          placeholder={props.placeholder}
          variants={formVariants.input(colors)}
          whileHover="hover"
          onInput={props.validation}
          onKeyUp={props.validation}
          onFocus={() => container.start("focus")}
          onBlur={() => container.start("initial")}
          className="z-10 w-full p-4 text-xl placeholder-current placeholder-opacity-0 border rounded-lg resize-none lg:text-3xl focus:outline-none h-30 lg:h-40 focus:shadow-md"
          required
        />
        <AnimatePresence>
          {props.error && (
            <ErrorMessage
              key={props.name}
              message={props.error}
              colors={colors}
            />
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
}

interface Props {
  message: string;
  colors: object;
}

function ErrorMessage(props: Props) {
  const container = useAnimation();

  React.useEffect(() => {
    container.start("visible");
  });

  return (
    <motion.div
      initial="initial"
      animate={container}
      variants={formVariants.error(props.colors)}
      className="box-border absolute flex items-end justify-center w-full h-10 text-sm border-b border-l border-r rounded-lg rounded-t-none xl:font-semibold xl:text-md -bottom-6"
      exit="hidden"
    >
      <motion.p>{props.message}</motion.p>
    </motion.div>
  );
}
