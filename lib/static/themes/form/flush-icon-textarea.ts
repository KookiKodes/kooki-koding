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
        border: "none",
        _focus: {
          boxShadow: "none",
          borderColor: "currentColor",
          color: "inherit",
        },
        resize: "none",
        color: "inherit",
        borderRadius: "none",
        borderBottom: ".2rem solid",
        borderColor: "currentColor",
        transition: "height .3s ease",
        _placeholder: { color: "inherit" },
        _hover: {
          color: "inherit",
          borderColor: "currentColor",
        },
        overflow: "hidden",
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
        borderLeft: ".2rem solid",
        borderBottom: ".2rem solid",
        px: 2,
        py: 2,
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
        borderLeft: ".2rem solid",
        borderBottom: ".2rem solid",
        px: 4,
        py: 2,
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
        w: "30px",
        h: "30px",
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
        w: "30px",
        h: "30px",
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
        w: "30px",
        h: "30px",
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
        w: "30px",
        h: "30px",
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
        w: "30px",
        h: "30px",
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
        opacity: 0.31,
        background: "Complementary.light.solid",
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "Complementary.dark.solid",
      },
      icon: {
        w: "30px",
        h: "30px",
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
        w: "30px",
        h: "30px",
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
        w: "30px",
        h: "30px",
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
        w: "30px",
        h: "30px",
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
        opacity: 0.31,
        background: "Primary.light.solid",
      },
      lineContainer: {
        h: "150px",
      },
      line: {
        color: "Primary.dark.solid",
      },
      icon: {
        w: "30px",
        h: "30px",
        color: "Primary.dark.solid",
      },
    },
  },
};
