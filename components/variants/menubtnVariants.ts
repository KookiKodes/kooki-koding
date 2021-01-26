import { Variants } from "framer-motion";
import themeTrasitionVariant from "./themeTransitionVariant";

const theme = (colors) => {
  return {
    background: colors.bkPrim.color,
    boxShadow: `0 0 5px ${colors.bkPrim.a(0.8).color}`,
    ...themeTrasitionVariant,
  };
};

const colorsOpen = (colors) => {
  return {
    background: colors.bkSec.color,
    boxshadow: `0 0 5px ${colors.bkSec.a(0.8).color}`,
  };
};

const colorsClosed = (colors) => {
  return {
    background: colors.bkPrim.color,
    boxshadow: `0 0 5px ${colors.bkPrim.a(0.8).color}`,
  };
};

const bars = [
  {
    variants(colors): Variants {
      return {
        open: { rotateZ: 225, y: "1.4em", ...colorsOpen(colors) },
        closed: { rotateZ: 0, y: "0em", ...colorsClosed(colors) },
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
          scale: 0,
          ...colorsOpen(colors),
        },
        closed: {
          opacity: 1,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          ...colorsClosed(colors),
        },
        theme: theme(colors),
      };
    },
  },
  {
    variants(colors) {
      return {
        open: { rotateZ: -225, y: "-1.4em", ...colorsOpen(colors) },
        closed: { rotateZ: 0, y: "0em", ...colorsClosed(colors) },
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
