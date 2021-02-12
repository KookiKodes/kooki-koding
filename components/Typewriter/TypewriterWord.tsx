//* Packages
import React from "react";
import { motion, useIsPresent } from "framer-motion";

//* Variants
import typewriterVariants from "@components/Typewriter/typewriterVariants";

//* Components
import TypewriterLetter from "./TypewriterLetter";
import InsertionCursor from "./InsertionCursor";

//* Interfaces
import { WordProps } from "./TypewriterInterface";

export default function TypewriterWord(props: WordProps) {
  const [isTyping, setIsTyping] = React.useState(true);
  const animWord = props.word.substring(props.start || 0).split("");
  const isPresent = useIsPresent();

  function start() {
    if (isPresent) setIsTyping(true);
  }

  function end() {
    if (isPresent) props.animComplete();
    setIsTyping(false);
  }

  return (
    <motion.div
      className="w-full h-full text-center whitespace-pre-wrap"
      variants={typewriterVariants.container(props.colors)}
      animate={["write", "theme"]}
      exit="erase"
      onAnimationStart={start}
      onAnimationComplete={end}
    >
      {props.start && (
        <motion.p className="inline text-4xl font-medium">
          {props.word.substring(0, props.start)}
        </motion.p>
      )}
      {animWord.map((letter, index) => {
        let key = index + props.wordIndex * 1000;
        return (
          <TypewriterLetter key={key} letter={letter} colors={props.colors} />
        );
      })}
      <InsertionCursor isTyping={isTyping} />
    </motion.div>
  );
}
