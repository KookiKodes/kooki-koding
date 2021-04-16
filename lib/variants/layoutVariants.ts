import { Variants } from "framer-motion";
import themeTrasitionVariant from "./themeTransitionVariant";

const layout = (colors): Variants => {
	return {
		theme: {
			background: colors.bkDark.darken(1).color,
			...themeTrasitionVariant,
		},
	};
};

export default layout;
