import { ComponentStyleConfig, theme } from "@chakra-ui/react";

export const Navigation: ComponentStyleConfig = {
	parts: ["container", "position", "title", "linkContainer", "link"],
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			container: {
				display: "flex",
				position: "fixed",
				p: "1rem",
				backdropFilter: "blur(3px)",
				zIndex: 20,
				perspective: "100rem",
				top: 0,
				left: 0,
			},
			position: {},
			title: {
				fontWeight: "light",
				userSelect: "none",
				_hover: { color: "primary.400.solid" },
			},
			linkContainer: {
				position: "relative",
			},
			link: {
				display: "flex",
				position: "relative",
				cursor: "pointer",
				zIndex: 10,
				transition: "all .3s",
				_hover: {
					color: "primary.400.solid",
				},
			},
			activeLinkSelector: {
				position: "absolute",
				bg: "transparent",
				zIndex: 5,
			},
			hoverLinkSelector: {
				position: "absolute",
				w: "100%",
				h: "100%",
				zIndex: "6",
				backdropFilter: "blur(2px)",
				bg: "transparent",
			},
		};
	},
	sizes: {
		default: {
			title: {
				fontSize: "2xl",
			},
			linkContainer: {
				h: "100%",
				w: "max-content",
			},
			link: {
				fontSize: "2xl",
				fontWeight: 400,
				px: 6,
				w: "auto",
			},
		},
		isOpen: {
			title: {
				fontSize: ["2xl", "4xl"],
			},
			linkContainer: {
				h: "min-content",
				w: "100%",
			},
			link: {
				fontSize: ["4xl", "6xl"],
				fontWeight: 100,
				w: "100%",
				py: 1,
				my: 8,
			},
		},
	},
	variants: {
		navbar: ({ colorMode }) => {
			const dark = colorMode === "dark";
			return {
				container: {
					bg: dark ? "neutral.800.80" : "neutral.400.80",
					color: dark ? "neutral.700.solid" : "neutral.200.solid",
					w: "100vw",
					h: "min-content",
					minH: "2vh",
					_hover: {
						color: "primary.400.solid",
					},
					alignItems: "center",
					justifyContent: "center",
				},
				position: {
					justifyContent: "space-between",
					alignItems: "center",
					height: "100%",
					width: "1080px",
					margin: "0 auto",
				},
				linkContainer: {
					flexDir: "row",
					alignItems: "center",
					justifyContent: "space-around",
				},
				link: {
					justifyContent: "center",
					alignItems: "center",
				},
			};
		},
		navmenu: ({ colorMode }) => {
			const dark = colorMode === "dark";
			return {
				container: {
					bg: dark ? "neutral.700.80" : "neutral.400.80",
					color: dark ? "neutral.600.solid" : "neutral.200.solid",
					w: "100%",
					h: "100vh",
					alignItems: "center",
					justifyContent: "center",
				},
				position: {
					w: "100%",
					h: "100%",
					flexDir: "column",
					alignItems: "flex-start",
					justifyContent: "space-between",
				},
				linkContainer: {
					flexDir: "column",
					alignItems: "center",
					justifyContent: "center",
					margin: "auto 0",
				},
				link: {
					justifyContent: "center",
					alignItems: "center",
				},
			};
		},
	},
};
