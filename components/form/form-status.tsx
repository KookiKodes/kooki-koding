//* packages
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

//* components
import { MotionHeading } from "@components/framer";

//* interfaces
import { FormStatusProps as Props } from "@interfaces/form/ContactForm";

const variants = {};

const getMessages = (state, placeholder, modifier) => {
	switch (state + "&" + modifier) {
		case "default&focus": 
			return "Please fill the field with your " + placeholder;
		default:
			return "Thanks for stopping by. How may I help you?";
	}
};

export function FormStatus({ state = "inactive", modifier = "", placeholder }: Props) {
	const container = useAnimation();
	const message = getMessages(state, placeholder, modifier);

	useEffect(() => {
		container.start({
			opacity: [0, 1],
		});
	}, [state]);

	return (
		<MotionHeading
			variants={variants}
			animate={container}
			color='currentColor'
			size='xl'
			fontWeight='light'>
			{message}
		</MotionHeading>
	);
}
