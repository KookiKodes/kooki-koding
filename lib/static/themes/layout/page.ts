import { ComponentStyleConfig } from "@chakra-ui/react";

export const Page: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      position: "relative",
      flexDir: "column",
      alignItems: "center",
      pointerEvents: "none",
      zIndex: "10",
      px: [0, 6],
      mb: 10,
    };
  },
  sizes: {
    auto: {
      h: "min-content",
      w: "100vw",
      minH: "100vh",
    },
  },
  variants: {
    default: {
      color: "Primary.default.solid",
      bg: "transparent",
    },
  },
  defaultProps: {
    variant: "default",
    size: "auto",
  },
};
