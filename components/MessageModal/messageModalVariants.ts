import { Variants } from "framer-motion";

const container = (colors) => {
  return {
    initial: {
      y: -100,
      opacity: 0,
      background: colors.prim.color,
      color: colors.bkDark.darken(1).a(0.7).color,
    },
    theme: {
      background: colors.prim.color,
      color: colors.bkDark.darken(1).a(0.7).color,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
    hidden: {
      opacity: 0,
    },
  };
};

export default {
  container,
};
