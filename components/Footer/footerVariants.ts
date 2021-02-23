import { Variants } from "framer-motion";
import themeTrasitionVariant from "../../lib/variants/themeTransitionVariant";

const footer = (colors): Variants => {
  return {
    theme: {
      background: colors.bkDark.color,
      color: colors.prim.color,
      ...themeTrasitionVariant,
    },
  };
};

export default {
  footer,
};
