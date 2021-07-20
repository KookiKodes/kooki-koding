import { ComponentStyleConfig } from "@chakra-ui/react";

export const FlushIconTextarea: ComponentStyleConfig = {
	parts: ["container", "textarea", "iconContainer", "icon"],
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";

		return {
			container: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				w: "100%",
				h: "min-content",
				overflow: "hidden",
				transition: "color .3s ease, background .3s ease, box-shadow .3s ease",
				boxShadow: "-.1rem .1rem 0 .1rem currentcolor",
				borderTopRightRadius: ".3rem",
				borderTopLeftRadius: ".3rem",
				_hover: {
					boxShadow:
						"-.1rem .1rem 0 .1rem currentcolor, 0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
				},
			},
			textarea: {
				w: "100%",
				h: "50px",
				flex: "1 1 100%",
				fontSize: "2xl",
				border: "none",
				_focus: { boxShadow: "none" },
				resize: "none",
				color: "inherit",
				transition: "height .3s ease",
				_placeholder: { color: "inherit" },
			},
			iconContainer: {
				flex: "1 1 50px",
				w: "50px",
				h: "50px",
				display: "flex",
				alignItems: "center",
				flexDir: "column",
				bg: "currentColor",
				color: "inherit",
				transition: "height .3s ease",
				fontSize: "2xl",
				p: "8px 16px",
			},
		};
	},
	variants: {
		INACTIVE: {
			container: {
				borderColor: "currentColor",
				color: "Neutral.default.solid",
				_hover: {
					color: "Accent.solid",
				},
			},
			iconContainer: {
				justifyContent: "center",
			},
			textarea: {
				_groupHover: {
					color: "Neutral.default.solid",
				},
			},
			icon: {
				w: "30px",
				textAlign: "center",
				minH: "30px",
				h: "auto",
				justifyContent: "center",
				color: "Neutral.dark.solid",
			},
		},
		FOCUS: {
			container: {
				color: "Primary.light.solid",
				boxShadow:
					"-.1rem .1rem 0 .1rem currentcolor, 0 .8rem .4rem rgba(0, 0, 0, .3)",
				bg: "dark.solid",
			},
			textarea: {
				h: "150px",
			},
			iconContainer: {
				w: "min-content",
				h: "150px",
				justifyContent: "flex-start",
			},
			icon: {
				color: "dark.solid",
			},
		},
	},
};
