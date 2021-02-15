import { Variants } from "framer-motion";
import themeTransitionVariant from "../variants/themeTransitionVariant";

const container = (colors): Variants => {
  return {
    theme: {
      ...themeTransitionVariant,
    },
    initial: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.05,
      },
    },
    loading: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
};

const dot = (colors): Variants => {
  return {
    theme: {
      background: colors.prim.color,
      ...themeTransitionVariant,
    },
    initial: {
      y: "50%",
      opacity: 0.6,
    },
    loading: {
      y: "-50%",
      opacity: 1,
    },
  };
};

export default {
  container,
  dot,
};
