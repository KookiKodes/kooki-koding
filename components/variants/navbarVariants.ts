import { Variants } from "framer-motion";
import themeTrasitionVariant from "./themeTransitionVariant";

const variants = (colors): Variants => {
  return {
    open: {
      width: "100%",
      height: "100%",
      background: colors.bkPrim.color,
    },
    closed: {
      background: colors.bkPrim.a(0).color,
      width: "110px",
      transition: {
        duration: 0.9,
        delay: 0.3,
        type: "spring",
      },
    },
    theme: {
      ...themeTrasitionVariant,
    },
  };
};

export default variants;
