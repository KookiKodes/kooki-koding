import { Variants } from "framer-motion";
import themeTrasitionVariant from "../variants/themeTransitionVariant";

const theme = (colors) => {
  return {
    background: colors.bkPrim.color,
    ...themeTrasitionVariant,
  };
};

const colorsOpen = (colors) => {
  return {
    background: colors.bkSec.color,
    transition: {
      duration: 0.8,
      type: "spring",
    },
  };
};

const colorsClosed = (colors) => {
  return {
    background: colors.bkPrim.color,
    transition: {
      duration: 0.8,
      type: "spring",
    },
  };
};

const bars = [
  {
    variants(colors): Variants {
      return {
        open: {
          rotateZ: 225,
          y: `0rem`,
          position: "absolute",
          ...colorsOpen(colors),
        },
        closed: {
          rotateZ: 0,
          y: "0rem",
          position: "relative",
          ...colorsClosed(colors),
        },
        theme: theme(colors),
      };
    },
  },
  {
    variants(colors): Variants {
      return {
        open: {
          opacity: 0,
          rotateY: 180,
          rotateZ: 360,
          ...colorsOpen(colors),
        },
        closed: {
          opacity: 1,
          rotateY: 0,
          rotateZ: 0,
          ...colorsClosed(colors),
        },
        theme: theme(colors),
      };
    },
  },
  {
    variants(colors): Variants {
      return {
        open: {
          rotateZ: -225,
          y: `-0rem`,
          position: "absolute",
          ...colorsOpen(colors),
        },
        closed: {
          rotateZ: 0,
          y: "0rem",
          position: "relative",
          ...colorsClosed(colors),
        },
        theme: theme(colors),
      };
    },
  },
];

const button = (colors): Variants => {
  return {
    initial: {
      scale: 1,
      color: colors.bkPrim.darken(1).color,
    },
    theme: {
      background: "none",
      color: colors.bkPrim.color,
      ...themeTrasitionVariant,
    },
    hover: {
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
    focus: {
      scale: 0.8,
      color: colors.bkPrim.darken(1).color,
    },
    open: {},
    closed: {},
  };
};

export default {
  bars,
  button,
};
