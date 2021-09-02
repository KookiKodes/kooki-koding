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
        cursor: "pointer",
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
        cursor: "pointer",
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
    "default&disabled": {
      container: {
        opacity: 0.35,
        color: "Neutral.default.solid",
        bg: "transparent",
      },
      input: {
        _disabled: {
          opacity: 1,
          color: "Neutral.default.solid",
        },
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
        opacity: 0.3,
        color: "Complementary.light.solid",
        bg: "Complementary.dark.solid",
        boxShadow: "0 0 0 0 currentColor, 0 0 0 rgba(0, 0, 0, .3)",
        _hover: {
          boxShadow: "0 0 0 0 currentColor, 0 0 0 rgba(0, 0, 0, .3)",
        },
      },
      input: {
        _disabled: {
          opacity: 1,
          color: "Complementary.light.solid",
        },
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
        opacity: 0.3,
        color: "Primary.light.solid",
        bg: "Primary.dark.solid",
        boxShadow: "0 0 0 0 currentColor, 0 0 0 rgba(0, 0, 0, .3)",
        _hover: {
          boxShadow: "0 0 0 0 currentColor, 0 0 0 rgba(0, 0, 0, .3)",
        },
      },
      input: {
        _disabled: {
          opacity: 1,
          color: "Primary.light.solid",
        },
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
    "sending&": {
      container: {
        color: "Primary.dark.solid",
        bg: "Primary.default.solid",
      },
      input: {
        color: "Neutral.dark.solid",
      },
      "icon-left-box": {
        border: ".2rem solid",
        borderColor: "Primary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Primary.default.solid",
      },
      "icon-right": {
        color: "Neutral.dark.solid",
      },
    },
    "sending&hover": {
      container: {
        color: "Primary.dark.solid",
        bg: "Primary.default.solid",
        boxShadow: "0 0 0 currentColor, 0 1.6rem .8rem rgba(0, 0, 0, .3)",
      },
      input: {
        color: "Neutral.dark.solid",
      },
      "icon-left-box": {
        borderWidth: ".2rem",
        borderColor: "Primary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Primary.default.solid",
      },
      "icon-right": {
        color: "Neutral.dark.solid",
      },
    },
    "sending&focus": {
      container: {
        color: "Primary.dark.solid",
        bg: "Primary.default.solid",
        boxShadow: "sending-focus",
        borderRadius: ".3rem",
      },
      input: {
        color: "Primary.light.solid",
      },
      "icon-left-box": {
        borderWidth: "0 .2rem .2rem .2rem",
        borderBottomLeftRadius: ".3rem",
        borderColor: "Primary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Primary.light.solid",
      },
      "icon-right": {
        color: "Primary.light.solid",
      },
    },
    "sending&disabled": {
      container: {
        opacity: 0.3,
        color: "Primary.dark.solid",
        bg: "Primary.default.solid",
      },
      input: {
        _disabled: {
          opacity: 1,
          color: "Neutral.dark.solid",
        },
      },
      "icon-left-box": {
        border: ".2rem solid",
        borderColor: "Primary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Primary.default.solid",
      },
      "icon-right": {
        color: "Neutral.dark.solid",
      },
    },
    "sent&": {
      container: {
        color: "Primary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "sent",
      },
      input: {
        color: "Primary.dark.solid",
      },
      "icon-left-box": {
        border: "solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Primary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Primary.dark.solid",
      },
    },
    "sent&hover": {
      container: {
        color: "Primary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "sending-hover",
      },
      input: {
        color: "Primary.default.solid",
      },
      "icon-left-box": {
        border: "solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Primary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Primary.dark.solid",
      },
      "icon-right": {
        color: "Primary.default.solid",
      },
    },
    "sent&focus": {
      container: {
        color: "Primary.default.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "sent-focus",
        _hover: {
          boxShadow: "sent-hover",
        },
      },
      input: {
        color: "Primary.light.solid",
      },
      "icon-left-box": {
        border: "solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Primary.default.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Primary.light.solid",
      },
      "icon-right": {
        color: "Primary.light.solid",
      },
    },
    "sent&disabled": {
      container: {
        opacity: 0.5,
        color: "Primary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "sent",
      },
      input: {
        _disabled: {
          opacity: 1,
          color: "Primary.dark.solid",
        },
      },
      "icon-left-box": {
        border: "solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Primary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Primary.dark.solid",
      },
    },
    "error&": {
      container: {
        color: "Complementary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "error",
      },
      input: {
        color: "Complementary.dark.solid",
      },
      "icon-left-box": {
        border: "solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Complementary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Complementary.dark.solid",
      },
    },
    "error&hover": {
      container: {
        color: "Complementary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "error-hover",
      },
      input: {
        color: "Complementary.default.solid",
      },
      "icon-left-box": {
        border: "solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Complementary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Complementary.dark.solid",
      },
      "icon-right": {
        color: "Complementary.default.solid",
      },
    },
    "error&focus": {
      container: {
        color: "Complementary.default.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "error-focus",
        _hover: {
          boxShadow: "error-focus-hover",
        },
      },
      input: {
        color: "Complementary.light.solid",
      },
      "icon-left-box": {
        border: "solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Complementary.default.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Complementary.light.solid",
      },
      "icon-right": {
        color: "Complementary.light.solid",
      },
    },
    "error&disabled": {
      container: {
        opacity: 0.5,
        color: "Complementary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "error",
      },
      input: {
        _disabled: {
          opacity: 1,
          color: "Complementary.dark.solid",
        },
      },
      "icon-left-box": {
        border: "solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Complementary.dark.solid",
        color: "Neutral.dark.solid",
      },
      "icon-left": {
        color: "Complementary.dark.solid",
      },
    },
  },
};
