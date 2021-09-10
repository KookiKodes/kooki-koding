import { ComponentStyleConfig } from "@chakra-ui/react";

export const SvgLinkWrapper: ComponentStyleConfig = {
  parts: ["wrapper", "svg", "hoverLinkSelector"],
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";

    return {
      wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        mx: ".5rem",
        w: "min-content",
        h: "min-content",
        p: ".4rem",
        borderRadius: "50%",
        transition: "background .3s ease, color .3s ease",
        bg: "transparent",
        _focus: {
          outline: "none",
        },
      },
      svg: {
        zIndex: 2,
        w: "1.75rem",
        h: "1.75rem",
        color: "inherit",
      },
      hoverLinkSelector: {
        w: "100%",
        h: "100%",
        position: "absolute",
        borderRadius: "50%",
        zIndex: "1",
        border: ".2rem solid",
        borderColor: "Primary.light.solid",
        boxSizing: "content-box",
      },
    };
  },
  variants: {
    default: {
      wrapper: {
        color: "inherit",
        bg: "transparent",
      },
      hoverLinkSelector: {
        borderColor: "transparent",
      },
    },
    hover: {
      wrapper: {
        color: "Neutral.dark.solid",
        // borderColor: "Accent.solid",
        bg: "Accent.solid",
      },
    },
    focus: {
      wrapper: {
        color: "Neutral.dark.solid",
        bg: "Accent.solid",
        // borderColor: "Primary.light.solid",
        // bg: "Primary.light.solid",
      },
    },
  },
};
