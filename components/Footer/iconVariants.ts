import { Variants } from "framer-motion";
import themeTrasitionVariant from "../variants/themeTransitionVariant";

const container = (colors): Variants => {
  return {
    theme: {
      ...themeTrasitionVariant,
    },
  };
};

const wrapper = (colors): Variants => {
  return {
    initial: {
      color: colors.prim.color,
      border: `.15em solid ${colors.prim.color}`,
      background: colors.bkDark.a(0).color,
      transition: {
        duration: 0.2,
      },
    },
    theme: {
      color: colors.prim.color,
      border: `.15em solid ${colors.prim.color}`,
      background: colors.bkDark.a(0).color,
      ...themeTrasitionVariant,
    },
    hover: {
      color: colors.bkDark.color,
      border: `.15em solid ${colors.bkPrim.color}`,
      background: colors.bkPrim.color,
      transition: {
        duration: 0.2,
      },
    },
  };
};

export default {
  container,
  wrapper,
};
