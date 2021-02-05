//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Variants
import formVariants from "../variants/formVariants";

//* Interfaces
import { FInput } from "@components/interfaces/Form";

export default function FormInput(props: FInput) {
  const { colors } = useThemedContext();
  const container = useAnimation();
  if (props.inputInfo === 'input') {
  return (
      <motion.div
        variants={formVariants.inputContainer(colors)}
        className="flex flex-col self-center w-full h-full xl:justify-end col-span-1"
      >
        <motion.label className="self-start mb-4 text-2xl" htmlFor={props.name}>
          {props.label}
        </motion.label>
        <motion.input
          name={props.name}
          animate={container}
          type={props.type}
          initial="initial"
          variants={formVariants.input(colors)}
          whileHover="hover"
          onFocus={() => container.start("focus")}
          onBlur={() => container.start("initial")}
          className="w-full p-4 text-xl lg:text-3xl border rounded-lg focus:outline-none h-8 lg:h-14 focus:shadow-lg"
        />
      </motion.div>
    )
  }
  else {
    return (
      <motion.div
        variants={formVariants.inputContainer(colors)}
        className="flex flex-col self-center w-full h-full xl:justify-end col-span-full"
      >
        <motion.label className="self-start mb-4 text-2xl" htmlFor={props.name}>
          {props.label}
        </motion.label>
        <motion.textarea
          name={props.name}
          animate={container}
          initial="initial"
          variants={formVariants.input(colors)}
          whileHover="hover"
          onFocus={() => container.start("focus")}
          onBlur={() => container.start("initial")}
          className="w-full resize-none text-xl p-4 lg:text-3xl border rounded-lg focus:outline-none h-30 lg:h-40 focus:shadow-lg"
        />
      </motion.div>
    )
    }
}
