import { Variants } from "framer-motion";

const variants: Variants = {
	initial: {
		y: "25%",
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.8,
			duration: 0.7,
			type: "spring",
		},
	},
	hidden: {
		y: "25%",
		opacity: 0,
		transition: {
			delay: 0.2,
			duration: 0.5,
		},
	},
};

export default variants;
