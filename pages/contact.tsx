//* Packages
import React from "react";
import Head from "next/head";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useIsPresent,
} from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
import FormInput from "../components/subcomponents/FormInput";

//* Variants
import formVariants from "@components/variants/formVariants";

//* Static
import FInputs from "@components/static/formInputs";

export default function Contact() {
  const { colors, themeName } = useThemedContext();
  const container = useAnimation();
  const child = useAnimation();

  React.useEffect(() => {
    container.start("visible");
  }, []);

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <>
      <Head>
        <title>Devin Jackson | Send me a message</title>
      </Head>
      <header className="flex self-center justify-center w-5/6 mt-16 h-30 xl:w-3/6">
        <h1 className="text-4xl xl:text-6xl">
          Thanks for stopping by. How may I help you?
        </h1>
      </header>
      <motion.form
        initial="hidden"
        variants={formVariants.form(colors)}
        animate={container}
        className="relative grid w-5/6 grid-cols-1 grid-rows-4 mt-12 mb-12 xl:gap-y-5 xl:gap-x-10 xl:grid-rows-3 h-4/6 xl:h-auto md:w-3/6 xl:grid-cols-2 lg:grid-rows-2"
      >
        {FInputs.map((info, index) => {
          return <FormInput key={index} {...info} />;
        })}
        <motion.div
          className="flex items-center justify-center w-full h-auto row-start-4 xl:row-start-3 col-span-full"
          variants={formVariants.inputContainer(colors)}
        >
          <motion.button
            animate={child}
            variants={formVariants.submit(colors)}
            whileHover="hover"
            onFocus={() => child.start("hover")}
            onBlur={() => child.start("theme")}
            className="w-full text-2xl font-semibold border-2 rounded-full xl:w-2/6 h-14 focus:shadow-lg focus:outline-none"
          >
            Submit
          </motion.button>
        </motion.div>
      </motion.form>
    </>
  );
}
