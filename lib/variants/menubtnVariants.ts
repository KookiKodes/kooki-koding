import { Variants } from "framer-motion";
interface Bar {
	variants: Variants;
}

export const bars: Bar[] = [
	{
		variants: {
			open: {
				rotateZ: 225,
				position: "absolute",
				margin: 0,
			},
			closed: {
				rotateZ: 0,
				position: "relative",
			},
		},
	},
	{
		variants: {
			open: {
				width: "0%",
				position: "absolute",
				margin: 0,
				opacity: 0,
			},
			closed: {
				width: "100%",
				position: "relative",
				opacity: 1,
			},
		},
	},
	{
		variants: {
			open: {
				rotateZ: -225,
				position: "absolute",
				margin: 0,
			},
			closed: {
				rotateZ: 0,
				position: "relative",
			},
		},
	},
];

export const menuBtnVariant = {
	enter: {
		x: 0,
		opacity: 1,
	},
	exit: {
		x: 250,
		opacity: 0,
	},
};
