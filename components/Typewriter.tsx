//* Packages
import React from "react";
import { useThemedContext } from "kooki-components";
import { motion, useCycle, AnimatePresence, useAnimation } from "framer-motion";

//* Components
import TypewriterWord from "@components/subcomponents/TypewritterWord";

//* Styles
import typewriter from "../styles/Typewriter.module.sass";

//* Interfaces
import { TypewriterProps } from "./interfaces/Typewriter";

export default function Typewriter(props: TypewriterProps) {
  const { colors } = useThemedContext();
  const [wordCycle, nextWordCycle] = useCycle(...props.words);

  return (
    <motion.div className={typewriter.container}>
      <AnimatePresence exitBeforeEnter>
        {props.words.map((word, index) => {
          return (
            word === wordCycle && (
              <TypewriterWord
                key={word}
                word={word}
                wordIndex={index}
                colors={colors}
                start={props.start}
                animComplete={() => nextWordCycle()}
              />
            )
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
