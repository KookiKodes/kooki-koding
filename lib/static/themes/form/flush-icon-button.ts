import { ComponentStyleConfig } from "@chakra-ui/react";

export const FlushIconButton: ComponentStyleConfig = {
	parts: ["button", "icon"],
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			button: {
				position: "relative",
				overFlow: "hidden",
				w: "100%",
				h: "50px",
				boxShadow: ".1rem .1rem 0 .1rem currentcolor",
				fontSize: "2xl",
				display: "flex",
				alignItems: "center",
				justifyItems: "center",
				transition: "all .3s ease",
				_focus: {
					boxShadow: "0 0 0 currentColor, 0 .8rem .4rem rgba(0, 0, 0, .3)",
				},
			},
			iconContainer: {
				position: "absolute",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				right: 0,
				h: "100%",
				w: "50px",
				borderTopRightRadius: ".3rem",
			},
			icon: {
				h: "100%",
				w: "100%",
			},
		};
	},
	sizes: {},
	variants: {
		INACTIVE: {
			button: {
				bg: "Neutral.dark.solid",
				borderColor: "currentColor",
				color: "Neutral.default.solid",
				borderTopRightRadius: ".3rem",
				borderTopLeftRadius: ".3rem",
				borderBottomLeftRadius: "none",
				borderBottomRightRadius: "none",
				_hover: {
					boxShadow: "0 0 0 currentColor, 0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
					border: "none",
					borderRadius: ".3rem",
					bg: "Accent.solid",
					color: "dark.solid",
				},
			},
			iconContainer: {
				bg: "Neutral.default.solid",
				color: "Neutral.dark.solid",
				_groupDisabled: {
					opacity: 0.5,
				},
				_groupHover: {
					bg: "Accent.solid",
					color: "dark.solid",
					borderRadius: "inherit",
				},
			},
			icon: {
				color: "inherit",
			},
		},
		FOCUS: {
			button: {
				bgGradient: "linear(to right, Primary.default.solid, Accent.solid)",
				borderColor: "none",
				color: "dark.solid",
				borderRadius: ".3rem",
				_hover: {
					boxShadow: "0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
					bgGradient: "linear(to right, Primary.default.solid, Accent.solid)",
					borderColor: "none",
					color: "dark.solid",
				},
			},
			iconContainer: {
				bg: "transparent",
				color: "inherit",
			},
			icon: {
				color: "inherit",
			},
		},
	},
};
