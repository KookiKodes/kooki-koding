import { ComponentStyleConfig } from "@chakra-ui/react";

export const Layout: ComponentStyleConfig = {
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			flexDir: "column",
			w: "100vw",
			minW: "100vw",
			h: "min-content",
			minH: "100vh",
			alignItems: "center",
			justifyContent: "flex-start",
			overflowX: "hidden",
			color: "primary.400.solid",
			bgGradient: "linear(to-b, dark.solid 50%, neutral.800.solid) 80%",
		};
	},
};
