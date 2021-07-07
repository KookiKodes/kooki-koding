import { MotionHeading } from "@components/framer";

//* interfaces
import { FormStatusProps as Props } from "@interfaces/form/ContactForm";

export function FormStatus({ message }: Props) {
	return (
		<MotionHeading color='currentColor' size='lg'>
			{message}
		</MotionHeading>
	);
}
