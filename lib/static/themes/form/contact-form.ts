import { ComponentStyleConfig } from "@chakra-ui/react";

export const ContactForm: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      display: "grid",
      position: "relative",
      w: "100%",
      px: 4,
      py: 8,
      minHeight: ["80vh", "80vh", "80vh", "50vh"],
      borderRadius: ".3rem",
      boxSizing: "border-box",
      h: "min-content",
      gap: 40,
      pointerEvents: "all",
      transition: "all .3s ease",
      border: ".2rem solid",
      borderColor: "Neutral.dark.solid",
    };
  },
  variants: {
    "default&none": {
      // bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
      bg: "dark.solid",
      color: "Neutral.default.solid",
      boxShadow: "0 .2rem .8rem rgba(0, 0, 0, .3)",
    },
    "default&focus": {
      bg: "dark.solid",
      // bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
      boxShadow: "0 .8rem .4rem rgba(0, 0, 0, .50)",
      color: "Primary.light.solid",
      borderColor: "Primary.light.solid",
    },
    "default&hover": {
      bg: "dark.solid",
      color: "Accent.solid",
      boxShadow: "0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
      borderColor: "Accent.solid",
    },
    "invalid&none": {
      bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
      color: "Complementary.dark.solid",
    },
    "invalid&hover": {
      bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
      color: "Complementary.dark.solid",
      borderColor: [
        "Neutral.dark.solid",
        "Neutral.dark.solid",
        "Complementary.dark.solid",
      ],
    },
    "invalid&focus": {
      bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
      color: "Complementary.default.solid",
      borderColor: "Complementary.default.solid",
    },
    "valid&none": {
      bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
      color: "Primary.dark.solid",
    },
    "valid&hover": {
      bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
      color: "Primary.dark.solid",
      borderColor: [
        "Neutral.dark.solid",
        "Neutral.dark.solid",
        "Primary.dark.solid",
      ],
    },
    "valid&focus": {
      bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
      color: "Primary.default.solid",
      borderColor: "Primary.default.solid",
    },
  },
};
