import { MotionHeading } from "@components/framer";

//* interfaces
import { FormStatusProps as Props } from "@interfaces/form/ContactForm";

const getMessages = (state, placeholder) => {
  switch (state) {
    case "INACTIVE":
      return "Thanks for stopping by. How may I help you?";
    case "FOCUS":
			if (placeholder === "submit") {
				return "Whenever you're ready to submit, please press this button :)"
			}
      return `Please provide your ${placeholder}`;
  }
};

export function FormStatus({ state = "INACTIVE", placeholder }: Props) {
  const message = getMessages(state, placeholder);

  return (
    <MotionHeading color="currentColor" size="lg">
      {message}
    </MotionHeading>
  );
}
