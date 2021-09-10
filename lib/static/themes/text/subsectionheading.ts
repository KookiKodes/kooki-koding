import { ComponentStyleConfig } from "@chakra-ui/react";

export const SubSectionHeading: ComponentStyleConfig = {
  parts: ["tag", "heading"],
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      tag: {
        w: "min-content",
        mb: "1rem",
      },
      header: {
        fontWeight: "normal",
        p: ".1rem",
      },
    };
  },
  sizes: {
    sm: {
      heading: {
        fontSize: ["lg", "xl"],
        fontWeight: "medium",
      },
    },
    md: {
      heading: {
        fontSize: ["xl", "2xl"],
        fontWeight: "normal",
      },
    },
    lg: {
      heading: {
        fontSize: ["3xl", "3xl"],
        fontWeight: "light",
      },
    },
  },
  variants: {
    default: {
      tag: {
        bg: "Primary.default.solid",
      },
      heading: {
        color: "Primary.dark.solid",
      },
    },
  },
};
