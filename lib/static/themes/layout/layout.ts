import { ComponentStyleConfig } from "@chakra-ui/react";

export const Layout: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => {
    const dark = colorMode === "dark";
    return {
      flexDir: "column",
      h: "min-content",
      minH: "100vh",
      alignItems: "center",
      justifyContent: "flex-start",
      overflowX: "hidden",
      overFlowY: "auto",
      color: "Primary.default.solid",
      bgGradient: "linear(to-b, dark.solid 50%, Neutral.dark.50) 80%",
    };
  },
};
