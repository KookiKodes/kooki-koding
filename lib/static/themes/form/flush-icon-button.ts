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
		"default&": {
			button: {
				bg: "Neutral.dark.solid",
				borderColor: "currentColor",
				color: "Neutral.default.solid",
				borderTopRightRadius: ".3rem",
				borderTopLeftRadius: ".3rem",
				borderBottomLeftRadius: "none",
				borderBottomRightRadius: "none",
			},
			iconContainer: {
				bg: "Neutral.default.solid",
				color: "Neutral.dark.solid",
				_groupDisabled: {
					opacity: 0.5,
				},
			},
			icon: {
				color: "inherit",
			},
		},
		"default&hover": {
			button: {
				boxShadow: "0 0 0 currentColor, 0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
				border: "none",
				borderRadius: ".3rem",
				bg: "Accent.solid",
				color: "Neutral.dark.solid",
				_hover: { 
					boxShadow: "0 0 0 currentColor, 0 1.6rem 1.2rem rgba(0, 0, 0, .3)",
					border: "none",
					borderRadius: ".3rem",
					bg: "Accent.solid",
					color: "Neutral.dark.solid",
				},
			},
			iconContainer: {
				bg: "Accent.solid",
				color: "Neutral.dark.solid",
				borderRadius: "inherit",
				_groupHover: {
					bg: "Accent.solid",
					color: "Neutral.dark.solid",
					borderRadius: "inherit",
				},
			}
		},
		"default&focus": {
			button: {
				bgGradient: "linear(to right, Primary.default.solid, Accent.solid)",
				borderColor: "none",
				color: "Neutral.dark.solid",
				borderRadius: ".3rem",
				_hover: {
					bgGradient: "linear(to right, Primary.default.solid, Accent.solid)",
					borderColor: "none",
					color: "Neutral.dark.solid",
					borderRadius: ".3rem",
				},
			},
			iconContainer: {
				bg: "transparent",
				color: "inherit",
				_groupHover: {
					bg: "transparent",
					color: "inherit",
				}
			},
			icon: {
				color: "inherit",
			},
		},
		"invalid&": {
			button: {
				opacity: .5,
				bg: "Neutral.dark.solid",
				borderColor: "currentColor",
				color: "Complementary.dark.solid",
				borderTopRightRadius: ".3rem",
				borderTopLeftRadius: ".3rem",
				borderBottomLeftRadius: "none",
				borderBottomRightRadius: "none",
			},
			iconContainer: {
				bg: "Complementary.dark.solid",
				color: "Neutral.dark.solid",
				_groupDisabled: {
					opacity: 0.5,
				},
			},
			icon: {
				color: "inherit",
			},
		},
		"invalid&hover": {
			button: {
				opacity: .5,
				cursor: "not-allowed",
				bg: "Neutral.dark.solid",
				borderColor: "currentColor",
				color: "Complementary.dark.solid",
				borderTopRightRadius: ".3rem",
				borderTopLeftRadius: ".3rem",
				borderBottomLeftRadius: "none",
				borderBottomRightRadius: "none",
				_hover: {
					bg: "Neutral.dark.solid",
				}
			},
			iconContainer: {
				bg: "Complementary.dark.solid",
				color: "Neutral.dark.solid",
				_groupDisabled: {
					opacity: 0.5,
				},
			},
			icon: {
				color: "inherit",
			},

		},
		"invalid&focus": {
			button: {
				opacity: .5,
				cursor: "not-allowed",
				bg: "Neutral.dark.solid",
				borderColor: "currentColor",
				color: "Complementary.dark.solid",
				borderTopRightRadius: ".3rem",
				borderTopLeftRadius: ".3rem",
				borderBottomLeftRadius: "none",
				borderBottomRightRadius: "none",
				_hover: {
					bg: "Neutral.dark.solid",
				},
				_focus: {
					boxShadow: ".1rem .1rem 0 .1rem currentcolor",
				}
			},
			iconContainer: {
				bg: "Complementary.dark.solid",
				color: "Neutral.dark.solid",
				_groupDisabled: {
					opacity: 0.5,
				},
			},
			icon: {
				color: "inherit",
			},

		},
		"invalid&disabled": {
			button: {
				_disabled: {
					boxShadow: ".1rem .1rem 0 .1rem currentcolor",
					bg: "Neutral.dark.solid",
					color: "Complementary.dark.solid",
					opacity: .5,
					borderTopRightRadius: ".3rem",
					borderTopLeftRadius: ".3rem",
					borderBottomLeftRadius: "none",
					borderBottomRightRadius: "none",
					_hover: {
						bg: "Neutral.dark.solid"
					},
					_focus: {
						bg: "Neutral.dark.solid"
					}
				},
			},
			iconContainer: {
				bg: "Complementary.dark.solid",
				color: "Neutral.dark.solid",
			},
			icon: {
				color: "inherit",
			},
		}
	},
};
