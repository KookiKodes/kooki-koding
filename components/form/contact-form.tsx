import { useEffect } from "react";
import { GridItem, useStyleConfig, useBoolean } from "@chakra-ui/react";

//* Components
import { FormStatus } from "@components/form/form-status";
import { MotionGrid } from "@components/framer";
import {FlushIconInput} from "@components/form/flush-icon-input"

//* interfaces
import { ContactFormProps as Props, ContactFormStateTypes as State } from "@interfaces/form/ContactForm";



export function ContactForm({ state = State[State.INACTIVE] }: Props) {
	const styles = useStyleConfig("ContactForm", { variant: state });

	return (
		<MotionGrid as='form' __css={styles}>
			<GridItem rowSpan={1} colSpan={1}>
				<FormStatus message='Thanks for stopping by. How may I help you?' />
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconInput type="name" name="name" placeholder="Name" iconLeft="user-card" iconRight="checkmark" state={state} />
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconInput type="email" name="email" placeholder="Email" iconLeft="mail" iconRight="checkmark" state={state} />
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconInput type="name" name="name" placeholder="Name" iconLeft="user-card" iconRight="checkmark" state={state} />
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconInput type="name" name="name" placeholder="Name" iconLeft="user-card" iconRight="checkmark" state={state} />
			</GridItem>
		</MotionGrid>
	);
}
