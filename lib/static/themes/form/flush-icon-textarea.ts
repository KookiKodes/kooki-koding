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
				borderTopRightRadius: ".3rem",
				borderTopLeftRadius: ".3rem",
				_hover: {
					boxShadow: "0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
				},
			},
			textarea: {
				w: "100%",
				h: "50px",
				flex: "1 1 100%",
				fontSize: "2xl",
				border: "none",
				_focus: {
					boxShadow: "none",
					borderColor: "currentColor",
					color: "inherit",
				},
				resize: "none",
				color: "inherit",
				borderRadius: "none",
				borderBottom: ".2rem solid",
				borderColor: "currentColor",
				transition: "height .3s ease",
				_placeholder: { color: "inherit" },
				_hover: {
					color: "inherit",
					borderColor: "currentColor",
				},
				overflow: "hidden",
			},
			lineContainer: {
				flex: "1 1 50px",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				flexDir: "column",
				bg: "currentColor",
				color: "inherit",
				transition: "height .3s ease",
				fontSize: "2xl",
				borderLeft: ".2rem solid",
				borderBottom: ".2rem solid",
				px: 4,
				py: 2,
			},
			iconContainer: {
				w: "50px",
				h: "50px",
				display: "flex",
				alignItems: "center",
				flexDir: "column",
				bg: "currentColor",
				color: "inherit",
				transition: "height .3s ease",
				fontSize: "2xl",
				borderLeft: ".2rem solid",
				borderBottom: ".2rem solid",
				px: 4,
				py: 2,
			},
		};
	},
	variants: {
		INACTIVE: {
			container: {
				color: "Neutral.default.solid",
				bg: "dark.solid",
				_hover: {
					color: "Accent.solid",
					bg: "Neutral.dark.solid",
				},
			},
			lineContainer: {
				h: "150px",
			},
			line: {
				color: "dark.solid",
			},
			icon: {
				w: "30px",
				h: "30px",
				color: "Neutral.dark.solid",
			},
		},
		FOCUS: {
			container: {
				color: "Primary.light.solid",
				boxShadow: "0 .8rem .4rem rgba(0, 0, 0, .3)",
				bg: "Neutral.dark.solid",
			},
			textarea: {
				h: "150px",
			},
			lineContainer: {
				h: "150px",
			},
			line: {
				color: "Primary.dark.solid",
			},
			icon: {
				color: "dark.solid",
			},
		},
	},
};
