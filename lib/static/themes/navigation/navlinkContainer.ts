import { ComponentStyleConfig } from "@chakra-ui/react";

export const NavlinkContainer: ComponentStyleConfig = {
	parts: ["link", "active-selector", "hover-selector"],
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			container: {
				position: "relative",
				h: "100%",
				w: "max-content",
				alignItems: "center",
				justifyContent: "space-around",
			},
			link: {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				cursor: "pointer",
				zIndex: "10",
				transition: "all 0.2s",
				_hover: {
					color: "primary.400.solid",
				},
			},
			"active-selector": {
				position: "absolute",
				bg: "transparent",
				zIndex: "5",
			},
			"hover-selector": {
				position: "absolute",
				w: "100%",
				h: "100%",
				zIndex: "6",
				backdropFilter: "blur(2px)",
			},
		};
	},
	sizes: {
		xs: {
			link: {
				fontSize: "xs",
				fontWeight: 900,
				px: 2,
			},
		},
		sm: {
			link: {
				fontSize: "sm",
				fontWeight: 800,
				px: 3,
			},
		},
		md: {
			link: {
				fontSize: "md",
				fontWeight: 700,
				px: 4,
			},
		},
		lg: {
			link: {
				fontSize: "lg",
				fontWeight: 600,
				px: 6,
			},
		},
		xl: {
			link: {
				fontSize: "xl",
				fontWeight: 500,
				px: 8,
			},
		},
		"2xl": {
			link: {
				fontSize: "2xl",
				fontWeight: 400,
				px: 6,
			},
		},
		"3xl": {
			fontSize: "3xl",
			fontWeight: 300,
		},
		"4xl": {
			fontSize: "4xl",
			fontWeight: 200,
		},
		"5xl": {
			fontSize: "5xl",
			fontWeight: 100,
		},
		"6xl": {
			fontSize: "6xl",
			fontWeight: 100,
		},
		"7xl": {
			fontSize: "7xl",
			fontWeight: 100,
		},
		"8xl": {
			fontSize: "8xl",
			fontWeight: 100,
		},
		"9xl": {
			fontSize: "9xl",
			fontWeight: 100,
		},
	},
	variants: {
		default: {
			"hover-selector": {
				bg: "transparent",
			},
		},
		hovering: {
			"hover-selector": {
				bg: "primary.400.60",
			},
		},
	},
	defaultProps: {
		size: "2xl",
		variant: "default",
	},
};
