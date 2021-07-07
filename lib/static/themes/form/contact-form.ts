import { ComponentStyleConfig } from "@chakra-ui/react";

export const ContactForm: ComponentStyleConfig = {
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			display: "grid",
			w: "100%",
			p: 2,
			minHeight: "80vh",
			borderRadius: ".3rem",
			boxSizing: "border-box",
			h: "min-content",
			gap: 40,
			pointerEvents: "all",
			transition: "all .3s ease"
		};
	},
	variants: {
		INACTIVE: {
			bgGradient: "linear(to bottom, Neutral.dark.solid, dark.solid)",
			color: "Neutral.default.solid",
			_hover: {color: "Accent.solid", boxShadow: 'xl'}
		},
	},
};
