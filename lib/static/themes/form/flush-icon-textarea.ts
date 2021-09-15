import { ComponentStyleConfig } from "@chakra-ui/react";

export const FlushIconTextarea: ComponentStyleConfig = {
  parts: ["container", "textarea", "iconContainer", "icon"],
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";

    return {
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        w: "100%",
        h: "min-content",
        overflow: "hidden",
        transition: "color .3s ease, background .3s ease, box-shadow .3s ease",
        borderTopRightRadius: ".3rem",
        borderTopLeftRadius: ".3rem",
        _hover: {
          boxShadow: "0 0 0 currentColor, 0 1.6rem .8rem rgba(0, 0, 0, .3)",
        },
      },
      textarea: {
        w: "100%",
        h: "50px",
        flex: "1 1 100%",
        fontSize: "2xl",
        border: "solid",
        _focus: {
          boxShadow: "none",
          borderColor: "currentColor",
          color: "inherit",
        },
        resize: "none",
        color: "inherit",
        borderRadius: "none",
        borderWidth: "0 0 .2rem 0",
        borderColor: "currentColor",
        transition: "height .3s ease",
        _placeholder: { color: "inherit" },
        _hover: {
          color: "inherit",
          borderColor: "currentColor",
        },
        overflow: "hidden",
        _disabled: {
          opacity: 1,
          color: "inherit",
          borderColor: "currentColor",
        },
      },
      lineContainer: {
        flex: "1 1 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDir: "column",
        bg: "currentColor",
        color: "inherit",
        transition: "height .3s ease",
        fontSize: "2xl",
        border: "solid",
        borderWidth: "0 0 .2rem .2rem",
        px: 2,
        py: 2,
        cursor: "pointer",
      },
      iconContainer: {
        w: "50px",
        h: "50px",
        display: "flex",
        alignItems: "center",
        flexDir: "column",
        bg: "currentColor",
        color: "inherit",
        transition: "height .3s ease",
        fontSize: "2xl",
        border: "solid",
        borderWidth: "0 0 .2rem .2rem",
        px: 4,
        py: 2,
        cursor: "pointer",
      },
      icon: {
        w: "30px",
        h: "30px",
      },
    };
  },
  variants: {
    "default&": {
      container: {
        color: "Neutral.default.solid",
        bg: "dark.solid",
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "default&hover": {
      container: {
        color: "Accent.solid",
        bg: "Neutral.dark.solid",
        _hover: {
          color: "Accent.solid",
          bg: "Neutral.dark.solid",
        },
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "default&focus": {
      container: {
        color: "Primary.light.solid",
        bg: "Neutral.dark.solid",
        boxShadow:
          ".1rem -.1rem 0 .1rem currentColor, 0 .8rem .4rem rgba(0, 0, 0, .3)",
        _hover: {
          boxShadow:
            ".1rem -.1rem 0 .1rem currentColor, 0 1.6rem .8rem rgba(0, 0, 0, .3)",
        },
      },
      textarea: {
        h: "150px",
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "Primary.dark.solid",
      },
      icon: {
        color: "dark.solid",
      },
    },
    "default&disabled": {
      container: {
        opacity: 0.3,
        color: "Neutral.default.solid",
        bg: "dark.solid",
      },
      textarea: {
        color: "Neutral.default.solid",
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "invalid&": {
      container: {
        color: "Complementary.dark.solid",
        bg: "transparent",
        _hover: {
          color: "Complementary.light.solid",
        },
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "invalid&hover": {
      container: {
        color: "Complementary.default.solid",
        bg: "Neutral.dark.solid",
        _hover: {
          color: "Complementary.default.solid",
          bg: "Neutral.dark.solid",
        },
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "invalid&focus": {
      container: {
        boxShadow: "invalid-focus",
        color: "Complementary.default.solid",
        bg: "Neutral.dark.solid",
        _hover: {
          color: "Complementary.default.solid",
          bg: "Neutral.dark.solid",
          shadow: "invalid-hover",
        },
      },
      textarea: {
        color: "Complementary.light.solid",
        _placeholder: {
          color: "Complementary.light.solid",
          borderColor: "Complementary.default.solid",
        },
        _hover: {
          color: "Complementary.light.solid",
          borderColor: "Complementary.default.solid",
        },
        _focus: {
          color: "Complementary.light.solid",
          borderColor: "Complementary.default.solid",
        },
      },
      lineContainer: {
        color: "Complementary.default.solid",
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "invalid&disabled": {
      container: {
        opacity: 0.3,
        color: "Complementary.light.solid",
        bg: "Complementary.dark.solid",
        _hover: {
          boxShadow: "none",
        },
      },
      textarea: {
        color: "Complementary.light.solid",
      },
      iconContainer: {
        background: "Complementary.light.solid",
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "Complementary.dark.solid",
      },
      icon: {
        color: "Complementary.dark.solid",
      },
    },
    "valid&": {
      container: {
        color: "Primary.dark.solid",
        bg: "transparent",
        _hover: {
          color: "Primary.light.solid",
        },
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "valid&hover": {
      container: {
        color: "Primary.default.solid",
        bg: "Neutral.dark.solid",
        _hover: {
          color: "Primary.default.solid",
          bg: "Neutral.dark.solid",
        },
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "valid&focus": {
      container: {
        boxShadow: "valid-focus",
        color: "Primary.default.solid",
        bg: "Neutral.dark.solid",
        _hover: {
          color: "Primary.default.solid",
          bg: "Neutral.dark.solid",
          shadow: "valid-hover",
        },
      },
      textarea: {
        color: "Primary.light.solid",
        _placeholder: {
          color: "Primary.light.solid",
          borderColor: "Primary.default.solid",
        },
        _hover: {
          color: "Primary.light.solid",
          borderColor: "Primary.default.solid",
        },
        _focus: {
          color: "Primary.light.solid",
          borderColor: "Primary.default.solid",
        },
      },
      lineContainer: {
        color: "Primary.default.solid",
        h: "150px",
      },
      line: {
        color: "dark.solid",
      },
      icon: {
        color: "Neutral.dark.solid",
      },
    },
    "valid&disabled": {
      container: {
        opacity: 0.3,
        color: "Primary.light.solid",
        bg: "Primary.dark.solid",
        _hover: {
          boxShadow: "none",
        },
      },
      textarea: {
        color: "Primary.light.solid",
      },
      iconContainer: {
        background: "Primary.light.solid",
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "Primary.dark.solid",
      },
      icon: {
        color: "Primary.dark.solid",
      },
    },
    "sending&": {
      container: {
        color: "Primary.dark.solid",
        bg: "Primary.default.solid",
        _hover: {
          color: "Primary.dark.solid",
        },
      },
      textarea: {
        color: "Neutral.dark.solid",
        borderColor: "Primary.dark.solid",
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: ".2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: ".2rem",
      },
      line: {
        color: "Primary.default.solid",
      },
      icon: {
        color: "Primary.default.solid",
      },
    },
    "sending&hover": {
      container: {
        color: "Primary.dark.solid",
        bg: "Primary.default.solid",
        _hover: {
          color: "Primary.dark.solid",
        },
      },
      textarea: {
        color: "Neutral.dark.solid",
        borderColor: "Primary.dark.solid",
        _hover: {
          color: "Neutral.dark.solid",
          borderColor: "Primary.dark.solid",
        },
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: ".2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: ".2rem",
      },
      line: {
        color: "Primary.default.solid",
      },
      icon: {
        color: "Primary.default.solid",
      },
    },
    "sending&focus": {
      container: {
        color: "Primary.dark.solid",
        bg: "Primary.default.solid",
        boxShadow: "sending-focus",
        _hover: {
          color: "Primary.dark.solid",
          boxShadow: "sending-focus",
        },
      },
      textarea: {
        color: "Primary.light.solid",
        borderColor: "Primary.dark.solid",
        _hover: {
          color: "Primary.light.solid",
          borderColor: "Primary.dark.solid",
        },
        _placeholder: {
          color: "Primary.light.solid",
          borderColor: "Primary.dark.solid",
        },
        _focus: {
          color: "Primary.light.solid",
          borderColor: "Primary.dark.solid",
        },
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      line: {
        color: "Primary.light.solid",
      },
      icon: {
        color: "Primary.light.solid",
      },
    },
    "sending&disabled": {
      container: {
        opacity: 0.3,
        color: "Primary.dark.solid",
        bg: "Primary.default.solid",
      },
      textarea: {
        color: "Neutral.dark.solid",
        borderColor: "Primary.dark.solid",
        _hover: {
          color: "Neutral.dark.solid",
          borderColor: "Primary.dark.solid",
        },
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: ".2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: ".2rem",
      },
      line: {
        color: "Primary.default.solid",
      },
      icon: {
        color: "Primary.default.solid",
      },
    },
    "sent&": {
      container: {
        color: "Primary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "sent",
      },
      textarea: {
        color: "Primary.dark.solid",
        borderColor: "Primary.dark.solid",
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      line: {
        color: "Primary.dark.solid",
      },
      icon: {
        color: "Primary.dark.solid",
      },
    },
    "sent&hover": {
      container: {
        color: "Primary.dark.solid",
        bg: "Neutral.dark.solid",
        _hover: {
          boxShadow: "sending-hover",
        },
      },
      textarea: {
        borderColor: "Primary.dark.solid",
        _hover: {
          color: "Primary.default.solid",
          borderColor: "Primary.dark.solid",
        },
        _placeholder: {
          color: "Primary.default.solid",
          borderColor: "Primary.dark.solid",
        },
        _focus: {
          color: "Primary.default.solid",
          borderColor: "Primary.dark.solid",
        },
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      line: {
        color: "Primary.dark.solid",
      },
      icon: {
        color: "Primary.dark.solid",
      },
    },
    "sent&focus": {
      container: {
        color: "Primary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "sent-focus",
        _hover: {
          boxShadow: "sent-hover",
        },
      },
      textarea: {
        borderColor: "Primary.default.solid",
        color: "Primary.light.solid",
        _hover: {
          color: "Primary.light.solid",
          borderColor: "Primary.default.solid",
        },
        _placeholder: {
          borderColor: "Primary.default.solid",
          color: "Primary.light.solid",
        },
        _focus: {
          borderColor: "Primary.default.solid",
          color: "Primary.light.solid",
        },
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Primary.default.solid",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Primary.default.solid",
      },
      line: {
        color: "Primary.light.solid",
      },
      icon: {
        color: "Primary.light.solid",
      },
    },
    "sent&disabled": {
      container: {
        opacity: 0.5,
        color: "Primary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "sent",
        _hover: {
          boxShadow: "sent",
        },
      },
      textarea: {
        color: "Primary.dark.solid",
        borderColor: "Primary.dark.solid",
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      line: {
        color: "Primary.dark.solid",
      },
      icon: {
        color: "Primary.dark.solid",
      },
    },
    "error&": {
      container: {
        color: "Complementary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "error",
      },
      textarea: {
        color: "Complementary.dark.solid",
        borderColor: "currentColor",
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      line: {
        color: "Complementary.dark.solid",
      },
      icon: {
        color: "Complementary.dark.solid",
      },
    },
    "error&hover": {
      container: {
        color: "Complementary.dark.solid",
        bg: "Neutral.dark.solid",
        _hover: {
          boxShadow: "error-hover",
        },
      },
      textarea: {
        _hover: {
          color: "Complementary.default.solid",
          borderColor: "currentColor",
        },
        _placeholder: {
          color: "Complementary.default.solid",
          borderColor: "currentColor",
        },
        _focus: {
          color: "Complementary.default.solid",
          borderColor: "currentColor",
        },
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      line: {
        color: "Complementary.dark.solid",
      },
      icon: {
        color: "Complementary.dark.solid",
      },
    },
    "error&focus": {
      container: {
        color: "Complementary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "error-focus",
        _hover: {
          boxShadow: "error-focus-hover",
        },
      },
      textarea: {
        _hover: {
          color: "Complementary.light.solid",
          borderColor: "Complementary.default.solid",
        },
        _placeholder: {
          color: "Complementary.light.solid",
          borderColor: "Complementary.default.solid",
        },
        _focus: {
          color: "Complementary.light.solid",
          borderColor: "Complementary.default.solid",
        },
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Complementary.default.solid",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
        borderColor: "Complementary.default.solid",
      },
      line: {
        color: "Complementary.light.solid",
      },
      icon: {
        color: "Complementary.light.solid",
      },
    },
    "error&disabled": {
      container: {
        opacity: 0.5,
        color: "Complementary.dark.solid",
        bg: "Neutral.dark.solid",
        boxShadow: "error",
        _hover: {
          boxShadow: "error",
        },
      },
      textarea: {
        color: "Complementary.dark.solid",
        borderColor: "currentColor",
      },
      lineContainer: {
        h: "150px",
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      iconContainer: {
        bg: "Neutral.dark.solid",
        borderWidth: "0 .2rem .2rem .2rem",
      },
      line: {
        color: "Complementary.dark.solid",
      },
      icon: {
        color: "Complementary.dark.solid",
      },
    },
  },
};
