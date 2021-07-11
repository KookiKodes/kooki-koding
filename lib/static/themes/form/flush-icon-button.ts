import { ComponentStyleConfig } from "@chakra-ui/react";

export const FlushIconButton: ComponentStyleConfig = {
  parts: ["button", "icon"],
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      button: {
        position: "relative",
        w: "100%",
        h: "50px",
        borderBottom: ".2rem solid",
        fontSize: "2xl",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        transition: "all .3s ease",
        _focus: { boxShadow: "none" },
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
        transition: "all .3s ease",
      },
      icon: {
        h: "100%",
        w: "100%",
      },
    };
  },
  sizes: {},
  variants: {
    INACTIVE: {
      button: {
        bg: "Neutral.dark.solid",
        borderColor: "currentColor",
        color: "Neutral.default.solid",
        borderTopRightRadius: ".3rem",
        borderTopLeftRadius: ".3rem",
        borderBottomLeftRadius: "none",
        borderBottomRightRadius: "none",
        _hover: {
          boxShadow: "xl",
          border: "none",
          borderRadius: ".3rem",
          bg: "Accent.solid",
          color: "dark.solid",
        },
      },
      iconContainer: {
        bg: "Neutral.default.solid",
        color: "Neutral.dark.solid",
        _groupDisabled: {
          opacity: 0.5,
        },
        _groupHover: {
          bg: "Accent.solid",
          color: "dark.solid",
          borderRadius: "inherit",
        },
      },
      icon: {
        color: "inherit",
      },
    },
    FOCUS: {
      button: {
        bgGradient: "linear(to right, Primary.default.solid, Accent.solid)",
        boxShadow: "lg",
        borderColor: "none",
        color: "dark.solid",
        borderRadius: ".3rem",
        _hover: {
          boxShadow: "dark-lg",
          bgGradient: "linear(to right, Primary.default.solid, Accent.solid)",
          borderColor: "none",
          color: "dark.solid",
        }
      },
      iconContainer: {
        bg: "transparent",
        color: "inherit",
      },
      icon: {
        color: "inherit",
      },
    },
  },
};
