import { Variants } from "framer-motion";
import themeTrasitionVariant from "./themeTransitionVariant";

const variants = (colors): Variants => {
  return {
    open: {
      width: "100vw",
      height: "100vh",
      background: colors.bkPrim.color,
    },
    closed: {
      background: colors.bkPrim.a(0).color,
      width: "1rem",
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.3,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      x: -100
    },
    theme: {
      ...themeTrasitionVariant,
    },
  };
};

export default variants;
