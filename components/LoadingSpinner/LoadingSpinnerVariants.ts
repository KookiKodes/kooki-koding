import { Variants } from "framer-motion";
import themeTransitionVariant from "lib/variants/themeTransitionVariant";

const loading = (colors): Variants => {
  return {
    theme: {
      ...themeTransitionVariant,
    },
  };
};

const spinner = (colors, size): Variants => {
  return {
    theme: {
      color: colors.prim.color,
      ...themeTransitionVariant,
    },
    initial: {
      rotateZ: -115,
      width: `${size}em`,
      height: `${size}em`,
    },
    rotate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };
};

export default {
  spinner,
  loading,
};
