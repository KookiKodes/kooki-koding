import { ComponentStyleConfig } from "@chakra-ui/react";

export const FlushIconButton: ComponentStyleConfig = {
  parts: ["button", "icon"],
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      button: {
        position: "relative",
        overFlow: "hidden",
        w: "100%",
        h: "50px",
        boxShadow: ".1rem .1rem 0 .1rem currentcolor",
        fontSize: "2xl",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        transition: "all .3s ease",
        _focus: {
          boxShadow: "0 0 0 currentColor, 0 .8rem .4rem rgba(0, 0, 0, .3)",
        },
      },
      iconContainer: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: 0,
        h: "100%",
        w: "50px",
        borderTopRightRadius: ".3rem",
      },
      icon: {
        h: "100%",
        w: "100%",
      },
    };
  },
  sizes: {},
  variants: {
    "default&": {
      button: {
        bg: "Neutral.dark.solid",
        borderColor: "currentColor",
        color: "Neutral.default.solid",
        borderTopRightRadius: ".3rem",
        borderTopLeftRadius: ".3rem",
        borderBottomLeftRadius: "none",
        borderBottomRightRadius: "none",
      },
      iconContainer: {
        bg: "Neutral.default.solid",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
        _groupFocus: {
          bg: "transparent",
          color: "inherit",
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "default&hover": {
      button: {
        boxShadow: "0 0 0 currentColor, 0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
        border: "none",
        borderRadius: ".3rem",
        bg: "Accent.solid",
        color: "Neutral.dark.solid",
        _hover: {
          boxShadow: "0 0 0 currentColor, 0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
          border: "none",
          borderRadius: ".3rem",
          bg: "Accent.solid",
          color: "Neutral.dark.solid",
        },
      },
      iconContainer: {
        bg: "Accent.solid",
        color: "Neutral.dark.solid",
        borderRadius: "inherit",
        _groupHover: {
          bg: "Accent.solid",
          color: "Neutral.dark.solid",
          borderRadius: "inherit",
        },
      },
    },
    "default&focus": {
      button: {
        bgGradient: "linear(to right, Primary.default.solid, Accent.solid)",
        borderColor: "none",
        color: "Neutral.dark.solid",
        borderRadius: ".3rem",
        _hover: {
          bgGradient: "linear(to right, Primary.default.solid, Accent.solid)",
          borderColor: "none",
          color: "Neutral.dark.solid",
          borderRadius: ".3rem",
        },
      },
      iconContainer: {
        bg: "transparent",
        color: "inherit",
        _groupHover: {
          bg: "transparent",
          color: "inherit",
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "default&disabled": {
      button: {
        _disabled: {
          _hover: {
            bg: "Neutral.dark.solid",
            color: "Neutral.default.solid",
            borderColor: "currentColor",
          },
          opacity: 0.5,
          bg: "Neutral.dark.solid",
          color: "Neutral.default.solid",
          borderColor: "currentColor",
          border: "solid",
          borderWidth: "0 0 .2rem 0",
          borderTopRightRadius: ".3rem",
          borderTopLeftRadius: ".3rem",
          borderBottomLeftRadius: "none",
          borderBottomRightRadius: "none",
        },
      },
      iconContainer: {
        bg: "Neutral.default.solid",
        color: "Neutral.dark.solid",
        _groupFocus: {
          bg: "transparent",
          color: "inherit",
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "invalid&": {
      button: {
        opacity: 0.5,
        bg: "Neutral.dark.solid",
        borderColor: "currentColor",
        color: "Complementary.dark.solid",
        borderTopRightRadius: ".3rem",
        borderTopLeftRadius: ".3rem",
        borderBottomLeftRadius: "none",
        borderBottomRightRadius: "none",
      },
      iconContainer: {
        bg: "Complementary.dark.solid",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "invalid&hover": {
      button: {
        opacity: 0.5,
        cursor: "not-allowed",
        bg: "Neutral.dark.solid",
        borderColor: "currentColor",
        color: "Complementary.dark.solid",
        borderTopRightRadius: ".3rem",
        borderTopLeftRadius: ".3rem",
        borderBottomLeftRadius: "none",
        borderBottomRightRadius: "none",
        _hover: {
          bg: "Neutral.dark.solid",
        },
      },
      iconContainer: {
        bg: "Complementary.dark.solid",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "invalid&focus": {
      button: {
        opacity: 0.5,
        cursor: "not-allowed",
        bg: "Neutral.dark.solid",
        borderColor: "currentColor",
        color: "Complementary.dark.solid",
        borderTopRightRadius: ".3rem",
        borderTopLeftRadius: ".3rem",
        borderBottomLeftRadius: "none",
        borderBottomRightRadius: "none",
        _hover: {
          bg: "Neutral.dark.solid",
        },
        _focus: {
          boxShadow: ".1rem .1rem 0 .1rem currentcolor",
        },
      },
      iconContainer: {
        bg: "Complementary.dark.solid",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "invalid&disabled": {
      button: {
        _disabled: {
          boxShadow: ".1rem .1rem 0 .1rem currentcolor",
          bg: "Neutral.dark.solid",
          color: "Complementary.dark.solid",
          opacity: 0.5,
          borderTopRightRadius: ".3rem",
          borderTopLeftRadius: ".3rem",
          borderBottomLeftRadius: "none",
          borderBottomRightRadius: "none",
          _hover: {
            bg: "Neutral.dark.solid",
          },
          _focus: {
            bg: "Neutral.dark.solid",
          },
        },
      },
      iconContainer: {
        bg: "Complementary.dark.solid",
        color: "Neutral.dark.solid",
      },
      icon: {
        color: "inherit",
      },
    },
    "valid&": {
      button: {
        bg: "Neutral.dark.solid",
        borderColor: "currentColor",
        color: "Primary.dark.solid",
        borderTopRightRadius: ".3rem",
        borderTopLeftRadius: ".3rem",
        borderBottomLeftRadius: "none",
        borderBottomRightRadius: "none",
      },
      iconContainer: {
        bg: "Primary.dark.solid",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "valid&hover": {
      button: {
        bg: "Neutral.dark.solid",
        borderColor: "currentColor",
        color: "Primary.default.solid",
        borderRadius: ".3rem",
        _hover: {
          bg: "Neutral.dark.solid",
          boxShadow:
            ".1rem .1rem 0 .1rem currentcolor, 0 1.6rem .8rem rgba(0, 0, 0, .3)",
        },
      },
      iconContainer: {
        bg: "Primary.default.solid",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "valid&focus": {
      button: {
        bg: "Neutral.dark.solid",
        borderColor: "currentColor",
        color: "Primary.default.solid",
        borderRadius: ".3rem",
        _hover: {
          bg: "Neutral.dark.solid",
        },
        _focus: {
          boxShadow:
            "0 0 0 .2rem currentcolor, 0 .8rem .4rem rgba(0, 0, 0, .3)",
        },
      },
      iconContainer: {
        bg: "Primary.default.solid",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "valid&disabled": {
      button: {
        _disabled: {
          boxShadow: ".1rem .1rem 0 .1rem currentcolor",
          bg: "Neutral.dark.solid",
          color: "Primary.dark.solid",
          borderTopRightRadius: ".3rem",
          borderTopLeftRadius: ".3rem",
          borderBottomLeftRadius: "none",
          borderBottomRightRadius: "none",
          _hover: {
            bg: "Neutral.dark.solid",
          },
          _focus: {
            bg: "Neutral.dark.solid",
          },
        },
      },
      iconContainer: {
        bg: "Primary.dark.solid",
        color: "Neutral.dark.solid",
      },
      icon: {
        color: "inherit",
      },
    },
    "sending&": {
      button: {
        bgGradient:
          "linear-gradient(to-r, Primary.default.solid, Primary.light.solid)",
        color: "Neutral.dark.solid",
        borderRadius: ".3rem",
        boxShadow: "none",
      },
      iconContainer: {
        bg: "transparent",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "sending&hover": {
      button: {
        bgGradient:
          "linear-gradient(to-r, Primary.default.solid, Primary.light.solid)",
        color: "Neutral.dark.solid",
        borderRadius: ".3rem",
        boxShadow: "0 0 0 currentColor, 0 1.6rem .8rem rgba(0, 0, 0, 0.3)",
        _hover: {
          boxShadow: "0 0 0 currentColor, 0 1.6rem .8rem rgba(0, 0, 0, 0.3)",
          bgGradient:
            "linear-gradient(to-r, Primary.default.solid, Primary.light.solid)",
          color: "Neutral.dark.solid",
          borderRadius: ".3rem",
        },
      },
      iconContainer: {
        bg: "transparent",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "sending&focus": {
      button: {
        bgGradient:
          "linear-gradient(to-r, Primary.default.solid, Primary.light.solid)",
        color: "Neutral.dark.solid",
        borderRadius: ".3rem",
        boxShadow: "0 0 0 currentColor, 0 1.6rem .8rem rgba(0, 0, 0, 0.3)",
        border: ".2rem solid",
        borderColor: "Primary.dark.solid",
        _hover: {
          border: ".2rem solid",
          borderColor: "Primary.dark.solid",
          boxShadow: "0 0 0 currentColor, 0 1.6rem .8rem rgba(0, 0, 0, 0.3)",
          bgGradient:
            "linear-gradient(to-r, Primary.default.solid, Primary.light.solid)",
          color: "Neutral.dark.solid",
          borderRadius: ".3rem",
        },
      },
      iconContainer: {
        bg: "transparent",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "sending&disabled": {
      button: {
        _hover: {
          bgGradient:
            "linear-gradient(to-r, Primary.default.solid, Primary.light.solid)",
        },
        _disabled: {
          bgGradient:
            "linear-gradient(to-r, Primary.default.solid, Primary.light.solid)",
          opacity: 0.3,
          color: "Neutral.dark.solid",
          borderRadius: ".3rem",
          boxShadow: "none",
          _hover: {
            bgGradient:
              "linear-gradient(to-r, Primary.default.solid, Primary.light.solid)",
          },
        },
      },
      iconContainer: {
        bg: "transparent",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
      },
      icon: {
        color: "inherit",
      },
    },
    "sent&": {
      button: {
        bg: "Neutral.dark.solid",
        color: "Primary.dark.solid",
        borderRadius: ".3rem",
        boxShadow: "0 0 0rem .2rem currentColor",
      },
      iconContainer: {
        bg: "Primary.default.solid",
        color: "Primary.dark.solid",
        borderWidth: "0 0 0 .2rem",
        borderColor: "Primary.dark.solid",
        borderBottomRightRadius: ".3rem",
      },
      icon: {
        color: "inherit",
      },
    },
    "sent&hover": {
      button: {
        bg: "Neutral.dark.solid",
        color: "Primary.default.solid",
        borderRadius: ".3rem",
        _hover: {
          boxShadow: "button-sent-hover",
          bg: "Neutral.dark.solid",
        },
      },
      iconContainer: {
        bg: "Primary.default.solid",
        color: "Primary.dark.solid",
        borderWidth: "0 0 0 .2rem",
        borderColor: "Primary.dark.solid",
        borderBottomRightRadius: ".3rem",
      },
      icon: {
        color: "inherit",
      },
    },
    "sent&focus": {
      button: {
        bg: "Neutral.dark.solid",
        color: "Primary.light.solid",
        borderRadius: ".3rem",
        _focus: {
          boxShadow: "button-sent-focus",
          _hover: {
            bg: "Neutral.dark.solid",
            boxShadow: "button-sent-focus-hover",
          },
        },
      },
      iconContainer: {
        bg: "Primary.light.solid",
        color: "Primary.default.solid",
        borderWidth: "0 0 0 .2rem",
        borderColor: "Primary.default.solid",
        borderBottomRightRadius: ".3rem",
      },
      icon: {
        color: "inherit",
      },
    },
    "sent&disabled": {
      button: {
        _hover: {
          bg: "Neutral.dark.solid",
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.3,
          bg: "Neutral.dark.solid",
          color: "Primary.dark.solid",
          borderRadius: ".3rem",
          boxShadow: "0 0 0rem .2rem currentColor",
          _hover: {
            bg: "Neutral.dark.solid",
          },
        },
      },
      iconContainer: {
        bg: "Primary.default.solid",
        color: "Primary.dark.solid",
        borderWidth: "0 0 0 .2rem",
        borderColor: "Primary.dark.solid",
        borderBottomRightRadius: ".3rem",
      },
      icon: {
        color: "inherit",
      },
    },
    "error&": {
      button: {
        bg: "Neutral.dark.solid",
        color: "Complementary.dark.solid",
        borderRadius: ".3rem",
        boxShadow: "0 0 0rem .2rem currentColor",
      },
      iconContainer: {
        bg: "Complementary.default.solid",
        color: "Complementary.dark.solid",
        borderWidth: "0 0 0 .2rem",
        borderColor: "Complementary.dark.solid",
        borderBottomRightRadius: ".3rem",
      },
      icon: {
        color: "inherit",
      },
    },
    "error&hover": {
      button: {
        _hover: {
          boxShadow: "button-error-hover",
          bg: "Neutral.dark.solid",
          color: "Complementary.default.solid",
          borderRadius: ".3rem",
        },
      },
      iconContainer: {
        bg: "Complementary.default.solid",
        color: "Complementary.dark.solid",
        borderWidth: "0 0 0 .2rem",
        borderColor: "Complementary.dark.solid",
        borderBottomRightRadius: ".3rem",
      },
      icon: {
        color: "inherit",
      },
    },
    "error&focus": {
      button: {
        bg: "Neutral.dark.solid",
        color: "Complementary.light.solid",
        borderRadius: ".3rem",
        _focus: {
          boxShadow: "button-error-focus",
          _hover: {
            bg: "Neutral.dark.solid",
            boxShadow: "button-error-focus-hover",
          },
        },
      },
      iconContainer: {
        bg: "Complementary.light.solid",
        color: "Complementary.default.solid",
        borderWidth: "0 0 0 .2rem",
        borderColor: "Complementary.default.solid",
        borderBottomRightRadius: ".3rem",
      },
      icon: {
        color: "inherit",
      },
    },
    "error&disabled": {
      button: {
        _hover: {
          bg: "Neutral.dark.solid",
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.3,
          bg: "Neutral.dark.solid",
          color: "Complementary.dark.solid",
          borderRadius: ".3rem",
          boxShadow: "0 0 0rem .2rem currentColor",
          _hover: {
            bg: "Neutral.dark.solid",
          },
        },
      },
      iconContainer: {
        bg: "Complementary.default.solid",
        color: "Complementary.dark.solid",
        borderWidth: "0 0 0 .2rem",
        borderColor: "Complementary.dark.solid",
        borderBottomRightRadius: ".3rem",
      },
      icon: {
        color: "inherit",
      },
    },
  },
};
