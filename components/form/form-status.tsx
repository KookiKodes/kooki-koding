//* packages
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

//* components
import { MotionHeading } from "@components/framer";

//* interfaces
import { FormStatusProps as Props } from "@interfaces/form/ContactForm";

const variants = {};

const getMessages = (state, placeholder) => {
	switch (state) {
		case "INACTIVE":
			return "Thanks for stopping by. How may I help you?";
		case "FOCUS":
			if (placeholder === "submit") {
				return "Whenever you're ready to submit, please press this button :)";
			}
			return `Please provide your ${placeholder}`;
	}
};

export function FormStatus({ state = "INACTIVE", placeholder }: Props) {
	const container = useAnimation();
	const message = getMessages(state, placeholder);

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
