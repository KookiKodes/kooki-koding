import { Variants } from "framer-motion";

const anchor = (colors): Variants => {
  return {
    initial: {
      color: colors.prim.color,
      background: colors.prim.a(0).color,
    },
    hover: {
      scale: 1.2,
      background: colors.prim.color,
      color: colors.bkDark.color,
    },
  };
};

const page = (colors): Variants => {
  return {
    initial: {
      x: -1000,
    },
    visible: {
      x: 0,
    },
  };
};

const arrowIcon = (colors): Variants => {
  return {
    initial: {
      width: "1em",
      height: "1em",
      x: 0,
    },
    hover: {
      x: `-10`,
      transition: {
        duration: 0.5,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };
};

export default {
  anchor,
  page,
  arrowIcon,
};
