import { ComponentStyleConfig } from "@chakra-ui/react";

export const Navigation: ComponentStyleConfig = {
	parts: [
		"container",
		"position",
		"title",
		"linkContainer",
		"link",
		"hamburgerBtn",
		"hamburgerBar",
		"hoverLinkSelector",
		"activeLinkSelector",
		"focusHoverSelector",
	],
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			container: {
				display: "flex",
				position: "fixed",
				backdropFilter: "blur(3px)",
				zIndex: 20,
				perspective: "100rem",
				transition: "color .5s ease",
				top: 0,
				left: 0,
			},
			position: {
				p: "1rem 2rem",
				position: "relative",
			},
			title: {
				fontWeight: "light",
				userSelect: "none",
				_hover: {
					color: "Primary.light.solid",
				},
				_focus: {
					color: "Primary.light.solid",
				},
			},
			link: {
				display: "flex",
				position: "relative",
				cursor: "pointer",
				textShadow: "0 0 1rem currentColor",
				_hover: {
					color: "Primary.light.solid",
					boxShadow: "none",
				},
				_focus: {
					color: "Primary.light.solid",
					boxShadow: "none",
					outline: "none",
				},
			},
			activeLinkSelector: {
				position: "absolute",
				bg: "transparent",
			},
			focusHoverSelector: {
				position: "absolute",
				w: "100vw",
				h: "100vh",
				bgGradient: "radial(circle, neutral.600.solid -20%, neutral.800.0 30%)",
				opacity: "1",
				pointerEvents: "none",
			},
			hoverLinkSelector: {
				position: "absolute",
				w: "100%",
				zIndex: "6",
				backdropFilter: "blur(2px)",
				bg: "currentColor",
			},
			hamburgerBtn: {
				w: "3.5rem",
				h: "2.5rem",
				justifyContent: "center",
				alignItems: "center",
				cursor: "pointer",
				position: "relative",
				_hover: { color: "Complementary.light.solid",},
				_focus: { color: "Complementary.light.solid", boxShadow: "none", outline: "none" },
				transition: "color .3s ease",
			},
			hamburgerBar: {
				w: "100%",
				h: ".4rem",
				borderRadius: ".2rem",
				boxShadow: "0 0 .3rem currentColor",
				bg: "currentColor",
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
			hoverLinkSelector: {
				h: "100%",
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
				py: 12,
				// my: 8,
			},
			hoverLinkSelector: {
				h: "60%",
			},
		},
	},
	variants: {
		navbar: ({ colorMode }) => {
			const dark = colorMode === "dark";
			return {
				container: {
					bg: dark ? "Neutral.dark.70" : "neutral.400.80",
					borderBottom: ".2rem solid currentColor",
					color: dark ? "Neutral.default.solid" : "neutral.200.solid",
					w: "100vw",
					h: "min-content",
					minH: "2vh",
					_hover: {
						color: "Primary.light.solid",
					},
					_focus: {
						color: "Primary.light.solid",
					},
					alignItems: "center",
					justifyContent: "center",
					userSelect: "none",
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
				hoverLinkSelector: {
					boxShadow: "0 0 1rem currentColor",
					borderRadius: ".3rem",
					bg: "currentColor",
				},
				link: {
					justifyContent: "center",
					alignItems: "center",
				},
				hamburgerBtn: {
					color: "Neutral.default.solid",
				},
			};
		},
		navmenu: ({ colorMode }) => {
			const dark = colorMode === "dark";
			return {
				container: {
					bg: dark ? "Neutral.dark.90" : "neutral.400.80",
					color: dark ? "Neutral.default.solid" : "neutral.200.solid",
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
					transition: "color .4s ease",
				},
				hamburgerBtn: {
					color: "Neutral.default.solid",
				},
				title: {
					transition: "color .3s ease",
				},
			};
		},
	},
};
