import { Variants } from "framer-motion";
import themeTransitionVariant from "./themeTransitionVariant";

const form = (colors): Variants => {
  return {
    theme: {
      ...themeTransitionVariant,
    },
    visible: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
        type: "spring",
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.05,
        type: "spring",
        staggerDirection: -1,
      },
    },
  };
};

const input = (colors): Variants => {
  return {
    initial: {
      borderColor: colors.prim.darken(1).a(0.5).color,
      background: colors.bkDark.color,
      color: colors.prim.color,
    },
    theme: {
      borderColor: colors.prim.darken(1).a(0.5).color,
      background: colors.bkDark.color,
      color: colors.prim.color,
      ...themeTransitionVariant,
    },
    focus: {
      borderColor: colors.prim.color,
      background: colors.bkDark.lighten(1).color,
    },
    hover: {
      borderColor: colors.prim.color,
      background: colors.bkDark.lighten(1).color,
    },
  };
};

const submit = (colors): Variants => {
  return {
    initial: {
      background: colors.bkDark.darken(1).color,
      color: colors.prim.color,
      borderColor: colors.prim.color,
    },
    theme: {
      background: colors.bkDark.darken(1).color,
      color: colors.prim.color,
      borderColor: colors.prim.color,
      ...themeTransitionVariant,
    },
    hover: {
      background: colors.prim.color,
      color: colors.bkDark.color,
      transition: {
        duration: 0.1,
      },
    },
  };
};

const error = (colors): Variants => {
  return {
    initial: {
      color: colors.bkSec.darken(1).color,
      background: colors.error.darken(1).color,
      borderColor: colors.prim.color,
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
    },
    theme: {
      color: colors.bkSec.darken(1).color,
      background: colors.error.darken(1).color,
      borderColor: colors.prim.color,
      ...themeTransitionVariant,
    },
  };
};

const inputContainer = (colors): Variants => {
  return {
    theme: {
      ...themeTransitionVariant,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
      },
    },
    focus: {
      scale: 0.4,
    },
  };
};
export default {
  form,
  input,
  inputContainer,
  submit,
  error,
};
