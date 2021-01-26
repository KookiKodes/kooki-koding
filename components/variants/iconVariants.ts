import { Variants } from "framer-motion";
import themeTrasitionVariant from "./themeTransitionVariant";

const container = (colors): Variants => {
  return {
    theme: {
      ...themeTrasitionVariant,
    },
  };
};

const wrapper = (colors): Variants => {
  return {
    theme: {
      color: colors.prim.color,
      border: `.15em solid ${colors.prim.color}`,
      background: colors.bkDark.a(0).color,
      ...themeTrasitionVariant,
    },
  };
};

export default {
  container,
  wrapper,
};
