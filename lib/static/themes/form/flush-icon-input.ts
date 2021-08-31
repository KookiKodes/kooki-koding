import { ComponentStyleConfig } from "@chakra-ui/react";

export const FlushIconInput: ComponentStyleConfig = {
  parts: ["icon-left", "icon-right", "input", "container", "icon"],
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      input: {
        _placeholder: { color: "inherit" },
        _focus: { boxShadow: "none" },
        border: "none",
        display: "flex",
        alignitems: "center",
        borderRadius: "none",
        h: "100%",
        w: "100%",
        fontSize: "1.5rem",
        transition: "none",
        background: "transparent",
        position: "relative",
      },
      container: {
        borderColor: "currentColor",
        borderBottom: ".2rem solid",
        borderTopLeftRadius: ".3rem",
        borderTopRightRadius: ".3rem",
        h: "50px",
        transition: "color .3s ease, background .3s ease, box-shadow .3s ease",
      },
      "icon-left-box": {
        position: "relative",
        w: "50px",
        h: "50px",
        display: "flex",
        color: "",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: ".3rem",
        bg: "currentColor",
      },
      "icon-right-box": {
        position: "relative",
        w: "50px",
        h: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: ".3rem",
        color: "inherit",
      },
      "icon-right": {
        w: "30px",
        h: "30px",
        color: "inherit",
        transition: "none",
      },
      "icon-left": {
        w: "30px",
        h: "30px",
        transition: "none",
        color: "Neutral.dark.solid",
      },
    };
  },
  variants: {
    "default&": {
      container: {
        color: "Neutral.default.solid",
        bg: "transparent",
      },
    },
    "default&focus": {
      container: {
        color: "Primary.light.solid",
        bg: "Neutral.dark.solid",
        boxShadow:
          ".1rem -.1rem 0 .1rem currentColor, 0 .8rem .4rem rgba(0, 0, 0, .3)",
        borderRadius: ".3rem",
        _hover: {
          boxShadow:
            ".1rem -.1rem 0 .1rem currentColor, 0 1.6rem .8rem rgba(0, 0, 0, .3)",
          borderRadius: ".3rem",
        },
      },
      input: {
        color: "Primary.light.solid",
      },
      "icon-left-box": {
        borderBottomLeftRadius: ".3rem",
      },
      "icon-right-box": {
        borderBottomRightRadius: ".3rem",
      },
    },
    "default&hover": {
      container: {
        color: "Accent.solid",
        bg: "Neutral.dark.solid",
      },
    },
    "invalid&": {
      container: {
        color: "Complementary.dark.solid",
        bg: "transparent",
      },
    },
    "invalid&hover": {
      container: {
        color: "Complementary.default.solid",
        bg: "Neutral.dark.solid",
      },
    },
    "invalid&focus": {
      container: {
        color: "Complementary.default.solid",
        bg: "Neutral.dark.solid",
        boxShadow:
          ".1rem -.1rem 0 .1rem currentColor, 0 .8rem .4rem rgba(0, 0, 0, .3)",
        borderRadius: ".3rem",
        _hover: {
          boxShadow:
            ".1rem -.1rem 0 .1rem currentColor, 0 1.6rem .8rem rgba(0, 0, 0, .3)",
          borderRadius: ".3rem",
        },
      },
      input: {
        color: "Complementary.light.solid",
      },
      "icon-left-box": {
        borderBottomLeftRadius: ".3rem",
      },
      "icon-right-box": {
        borderBottomRightRadius: ".3rem",
        color: "Complementary.light.solid",
      },
    },
    "invalid&disabled": {
      container: {
        opacity: 0.35,
        color: "Complementary.default.solid",
        bg: "Complementary.dark.solid",
        boxShadow: "0 0 0 0 currentColor, 0 0 0 rgba(0, 0, 0, .3)",
        _hover: {
          boxShadow: "0 0 0 0 currentColor, 0 0 0 rgba(0, 0, 0, .3)",
        },
      },
      input: {
        color: "Complementary.light.solid",
      },
      "icon-left-box": {
        borderBottomLeftRadius: ".3rem",
      },
      "icon-left": {
        color: "Complementary.dark.solid",
      },
      "icon-right-box": {
        borderBottomRightRadius: ".3rem",
        color: "Complementary.light.solid",
      },
    },
    "valid&": {
      container: {
        color: "Primary.dark.solid",
        bg: "transparent",
      },
    },
    "valid&hover": {
      container: {
        color: "Primary.default.solid",
        bg: "Neutral.dark.solid",
      },
    },
    "valid&focus": {
      container: {
        color: "Primary.default.solid",
        bg: "Neutral.dark.solid",
        boxShadow:
          ".1rem -.1rem 0 .1rem currentColor, 0 .8rem .4rem rgba(0, 0, 0, .3)",
        borderRadius: ".3rem",
        _hover: {
          boxShadow:
            ".1rem -.1rem 0 .1rem currentColor, 0 1.6rem .8rem rgba(0, 0, 0, .3)",
          borderRadius: ".3rem",
        },
      },
      input: {
        color: "Primary.light.solid",
      },
      "icon-left-box": {
        borderBottomLeftRadius: ".3rem",
        color: "Primary.default.solid",
      },
      "icon-right-box": {
        borderBottomRightRadius: ".3rem",
        color: "Primary.light.solid",
      },
    },
    "valid&disabled": {
      container: {
        opacity: 0.35,
        color: "Primary.default.solid",
        bg: "Primary.dark.solid",
        boxShadow: "0 0 0 0 currentColor, 0 0 0 rgba(0, 0, 0, .3)",
        _hover: {
          boxShadow: "0 0 0 0 currentColor, 0 0 0 rgba(0, 0, 0, .3)",
        },
      },
      input: {
        color: "Primary.light.solid",
      },
      "icon-left-box": {
        borderBottomLeftRadius: ".3rem",
      },
      "icon-left": {
        color: "Primary.dark.solid",
      },
      "icon-right-box": {
        borderBottomRightRadius: ".3rem",
        color: "Primary.light.solid",
      },
    },
  },
};
