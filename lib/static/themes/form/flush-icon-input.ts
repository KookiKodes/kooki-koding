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
        w: "calc(100% - 100px)",
        fontSize: "1.5rem",
        transition: "none",
        background: "transparent",
        position: "absolute",
        top: 0,
        left: "50px",
        translateX: "-50px",
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
        boxShadow: "0 .8rem .4rem rgba(0, 0, 0, .3)",
        _hover: {
          boxShadow: "0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
        },
      },
      input: {
        color: "Primary.default.solid",
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
        _hover: {
          boxShadow:
            ".1rem -.1rem 0 .1rem currentColor, 0 1.6rem .8rem rgba(0, 0, 0, .3)",
          borderRadius: ".3rem",
        },
        borderRadius: ".3rem",
      },
      "icon-left-box": {
        borderBottomLeftRadius: ".3rem",
      },
      "icon-right-box": {
        borderBottomRightRadius: ".3rem",
      },
    },
  },
};

