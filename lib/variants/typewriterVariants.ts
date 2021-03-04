import { Variants } from "framer-motion";
import themeTransitionVariant from "./themeTransitionVariant";

const container = (colors): Variants => {
  return {
    write: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    erase: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
        delayChildren: 1.3,
      },
    },
  };
};

const cursor = (colors): Variants => {
  return {
    initial: {
      background: colors.prim.a(0).color,
    },
    stationary: {
      background: [colors.prim.color, colors.prim.a(0).color],
      transition: {
        duration: 0.1,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.2,
      },
    },
    typing: {
      background: colors.prim.color,
      transition: {
        duration: 0.3,
        repeatType: "loop",
        repeat: 0,
      },
    },
    theme: {
      background: colors.prim.color,
      ...themeTransitionVariant,
    },
  };
};

const letter = (colors): Variants => {
  return {
    initial: {
      opacity: 0,
      display: "none",
    },
    write: {
      opacity: 1,
      display: "inline",
    },
    erase: {
      opacity: 0,
      display: "none",
    },
  };
};

export default {
  container,
  letter,
  cursor,
};
