import { Variants } from "framer-motion";
import themeTrasitionVariant from "../../lib/variants/themeTransitionVariant";

const container = (colors): Variants => {
  return {
    open: {
      display: "flex",
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    closed: {
      display: "none",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    theme: {
      ...themeTrasitionVariant,
    },
  };
};

const link = (colors): Variants => {
  return {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100, duration: 0.75 },
      },
    },
    closed: {
      y: 1900,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, duration: 0.5 },
      },
    },
    theme: {
      color: colors.bkSec.color,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
};

const hoverSelector = (colors): Variants => {
  return {
    theme: {
      background: colors.bkSec.color,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
};

const activeSelector = (colors): Variants => {
  return {
    theme: {
      background: colors.sec.a(0.4).color,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
};

export default {
  container,
  link,
  hoverSelector,
  activeSelector,
};
