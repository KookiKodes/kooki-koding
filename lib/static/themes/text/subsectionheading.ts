import { ComponentStyleConfig } from "@chakra-ui/react";

export const SubSectionHeading: ComponentStyleConfig = {
  parts: ["tag", "heading"],
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      tag: {
        w: "min-content",
        mb: "1rem",
        whiteSpace: "nowrap",
      },
      header: {
        fontWeight: "normal",
        p: ".1rem",
        whiteSpace: "nowrap",
      },
    };
  },
  sizes: {
    sm: {
      heading: {
        fontSize: ["md", "lg"],
        fontWeight: "medium",
      },
    },
    md: {
      heading: {
        fontSize: ["lg", "xl"],
        fontWeight: "normal",
      },
    },
    lg: {
      heading: {
        fontSize: ["xl", "2xl"],
        fontWeight: "normal",
      },
    },
    xl: {
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
