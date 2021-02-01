import { Variants } from "framer-motion";
import themeTrasitionVariant from "./themeTransitionVariant";

const theme = (colors) => {
  return {
    background: colors.bkPrim.color,
    ...themeTrasitionVariant,
  };
};

const colorsOpen = (colors) => {
  return {
    background: colors.bkSec.color,
  };
};

const colorsClosed = (colors) => {
  return {
    background: colors.bkPrim.color,
  };
};

const bars = [
  {
    variants(colors): Variants {
      return {
        open: { rotateZ: 225, y: "1rem",...colorsOpen(colors) },
        closed: { rotateZ: 0, y: "0rem",...colorsClosed(colors) },
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
    variants(colors) {
      return {
        open: { rotateZ: -225, y: "-1rem", ...colorsOpen(colors) },
        closed: { rotateZ: 0, y:"0rem",...colorsClosed(colors) },
        theme: theme(colors),
      };
    },
  },
];

const button = (colors): Variants => {
  return {
    theme: {
      background: "none",
      ...themeTrasitionVariant,
    },
  };
};

export default {
  bars,
  button,
};
