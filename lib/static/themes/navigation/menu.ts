import { ComponentStyleConfig } from "@chakra-ui/react";

export const Menu: ComponentStyleConfig = {
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			container: {
				position: "absolute",
				width: "100vw",
				height: "100vh",
				alignItems: "center",
				justifyContent: "flex-start",
				zIndex: 10,
				left: 0,
				bg: "dark.900.solid",
			},
			btnHamburger: {
				justifyContent: "center",
				alignItems: "center",
				color: "neutral.700.solid",
				_hover: { color: "complementary.500.solid" },
				cursor: "pointer",
				position: "relative",
			},
			hamburgerBar: {
				w: "100%",
				bg: "currentColor",
				borderRadius: ".2rem",
				boxShadow: "0 0 .3rem currentColor",
			},
		};
	},
	sizes: {
		md: {
			btnHamburger: {
				h: "2.5rem",
				w: "3.5rem",
			},
			hamburgerBar: {
				h: ".4rem",
			},
		},
	},
	variants: {
		closed: {},
	},
	defaultProps: {
		size: "md",
	},
};
