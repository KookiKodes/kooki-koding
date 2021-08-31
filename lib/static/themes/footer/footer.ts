import { ComponentStyleConfig } from "@chakra-ui/react";

export const Footer: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      position: "relative",
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      w: "100vw",
      h: "min-content",
      p: "2rem",
      bottom: 0,
      zIndex: 15,
      pointerEvents: "all",
      transition: "background .3s ease, color .3s ease",
      borderTop: ".2rem solid currentColor",
    };
  },
  sizes: {
    default: {},
  },
  variants: {
    default: {
      color: "Neutral.default.solid",
      bg: "Neutral.dark.70",
      backdropFilter: "blur(3px)",
      // svgWrapper: {
      // 	color: "Neutral.default.solid",
      // 	border: ".2rem solid currentColor",
      // 	// _hover: { color: "Complementary.default.solid" },
      // 	// _focus: { color: "Complementary.default.solid"},
      // },
      // svg: {
      // 	w: "1.5rem",
      // 	h: "1.5rem",
      // 	color: "Neutral.default.solid",
      // 	// _groupFocus: { color: "Complementary.light.solid"},
      // 	// _groupHover: {
      // 	// 	color: "Complementary.light.solid"
      // 	// }
      // },
    },
    hover: {
      color: "Accent.solid",
      bg: "Neutral.dark.solid",
    },
    focus: {
      color: "Primary.light.solid",
      bg: "Neutral.dark.solid",
    },
  },
  defaultProps: {
    variant: "default",
  },
};
