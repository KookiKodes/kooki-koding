import { Variants } from "framer-motion";
import themeTrasitionVariant from "./themeTransitionVariant";

const variants = (colors): Variants => {
	return {
		initial: {
			x: "25%",
			zIndex: 1,
			opacity: 0,
			color: colors.prim.color,
			background: colors.bkDark.darken(1).color,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.5,
				duration: 0.7,
				type: "spring",
			},
		},
		hidden: {
			x: "-25%",
			opacity: 0,
			zIndex: 2,
			transition: {
				delay: 0.2,
				duration: 0.5,
			},
		},
		theme: {
			color: colors.prim.color,
			background: colors.bkDark.darken(1).color,
			...themeTrasitionVariant,
		},
	};
};

export default variants;
