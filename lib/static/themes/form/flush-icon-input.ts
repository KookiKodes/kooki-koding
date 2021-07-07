import { ComponentStyleConfig } from "@chakra-ui/react";

export const FlushIconInput: ComponentStyleConfig = {
	parts: ["icon-left", "icon-right", "input", "container", "icon"],
	baseStyle: ({ colorMode }) => {
		const dark = colorMode === "dark";
		return {
			input: {
				_placeholder: {color: "inherit"},
				_focus: {boxShadow: "none"},
				border: "none",
				display: "flex",
				alignitems: "center",
				borderRadius: 'none',
				h: '100%',
				fontSize: "1.5rem",
				transition: "none"
			},
			container: {
				borderColor: "currentColor",
				borderBottom: ".2rem solid",
				borderTopLeftRadius: '.3rem',
				borderBottomLeftRadius: '.3rem',
				h: "50px",
				transition: "all .3s ease"
			},
			"icon-left-box": {
				w: '50px',
				h: '50px',
				display: "flex",
				color: "",
				alignItems: "center",
				justifyContent: "center",
				borderTopLeftRadius: ".3rem",
				borderBottomLeftRadius: ".3rem",
				bg: "currentColor",
			},
			"icon-right-box": {
				w: '50px',
				h: '50px',
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderTopLeftRadius: ".3rem",
				borderBottomLeftRadius: ".3rem",
				color: "inherit"
			},
			"icon-right": {
				w: '30px',
				h: '30px',
				color: "inherit",
				transition: "none",
			},
			"icon-left": {
				w: '30px',
				h: '30px',
				transition: "none",
				color: "Neutral.dark.solid"
			}
		};
	},
	variants: {
		INACTIVE: {
			container: {
				color: "Neutral.default.solid",
				bg: "transparent",
				_hover:{color: "Accent.solid", bg: "transparent", boxShadow: "xl"},
			},
			input: {
				_focus:{color: "Primary.default.solid", bg: "dark.solid", boxShadow: "xl"},
			}
		},
	},
};
