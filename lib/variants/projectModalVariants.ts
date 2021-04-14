import { Variants } from "framer-motion";

const container = (colors): Variants => {
	return {
		viewing: {
			zIndex: 10,
		},
		notViewing: {
			zIndex: 1,
		},
	};
};

export default {
	container,
};
