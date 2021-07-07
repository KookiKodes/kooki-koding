import { ComponentStyleConfig } from "@chakra-ui/react";

export const Footer: ComponentStyleConfig = {
	parts: ["container", "svgContainer", "svgWrapper"],
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			container: {
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
				transition: "all .5s ease",
			},
			svgContainer: {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				w: "1080px",
				h: "min-content",
				mb: ".5rem",
			},
			svgWrapper: {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				mx: ".5rem",
				w: "min-content",
				h: "min-content",
				p: ".3rem",
				borderRadius: "50%",
				transition: "background .3 ease",
			},
			svg: { zIndex: "2" },
			hoverLinkSelector: {
				w: "100%",
				h: "100%",
				position: "absolute",
				borderRadius: "50%",
				zIndex: "-1",
				bg: "currentColor",
				boxShadow: "0 0 1.5rem currentColor",
			},
		};
	},
	sizes: {
		default: {
			container: {},
		},
	},
	variants: {
		default: {
			container: {
				color: "Neutral.default.solid",
				bg: "Neutral.dark.70",
				backdropFilter: "blur(3px)",
				_hover: { color: "Primary.light.solid" },
				borderTop: ".2rem solid currentColor",
			},
			svgWrapper: {
				color: "Neutral.default.solid",
				border: ".2rem solid currentColor",
			},
			svg: {
				w: "1.5rem",
				h: "1.5rem",
				color: "Neutral.default.solid",
			},
		},
	},
	defaultProps: {
		variant: "default",
	},
};
