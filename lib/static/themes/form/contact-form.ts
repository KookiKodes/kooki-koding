import { ComponentStyleConfig } from "@chakra-ui/react";

export const ContactForm: ComponentStyleConfig = {
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			display: "grid",
			w: "100%",
			px: 4,
			py: 8,
			minHeight: "80vh",
			borderRadius: ".3rem",
			boxSizing: "border-box",
			h: "min-content",
			gap: 40,
			pointerEvents: "all",
			transition: "all .3s ease",
			border: ".2rem solid",
			borderColor: "Neutral.dark.solid",
		};
	},
	variants: {
		INACTIVE: {
			// bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
			bg: "dark.solid",
			color: "Neutral.default.solid",
			boxShadow: ["0 1.6rem 1.2rem rgba(0, 0, 0, .3)", "none"],
			_hover: {
				color: "Accent.solid",
				boxShadow: "0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
			},
		},
		FOCUS: {
			bg: "dark.solid",
			// bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
			boxShadow: "0 .8rem .4rem rgba(0, 0, 0, .50)",
			color: "Primary.light.solid",
		},
	},
};
