import { ComponentStyleConfig } from "@chakra-ui/react";

export const Page: ComponentStyleConfig = {
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			position: "relative",
			flexDir: "column",
			alignItems: "center",
			justifyContent: "center",
			pointerEvents: "none",
			zIndex: "10",
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
			color: "primary.500.solid",
			bg: "transparent",
		},
	},
	defaultProps: {
		variant: "default",
		size: "auto",
	},
};
