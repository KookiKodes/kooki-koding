import { FocusEvent, useState } from "react";
import { GridItem, useStyleConfig } from "@chakra-ui/react";

//* Components
import { FormStatus } from "@components/form/form-status";
import { MotionGrid } from "@components/framer";
import { FlushIconInput } from "@components/form/flush-icon-input";
import { FlushIconButton } from "@components/form/flush-icon-button";
import { FlushIconTextarea } from "@components/form/flush-icon-textarea";

//* interfaces
import {
	ContactFormProps as Props,
	ContactFormStateTypes as State,
} from "@interfaces/form/ContactForm";

//* icons
import { InputIcons } from "@static/icons";

export function ContactForm({
	state = State[State.INACTIVE],
	toggleState,
}: Props) {
	const styles = useStyleConfig("ContactForm", { variant: state });
	const [placeholder, setPlaceholder] = useState("");

	function toggleFocus(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { target, type } = e;
		toggleState("FOCUS");
		target.scrollIntoView({ behavior: "smooth", block: "nearest" });
		if (target.placeholder) {
			setPlaceholder(target.placeholder.toLowerCase());
		} else setPlaceholder(target.name.toLowerCase());
	}

	function isFocused(pl: string) {
		return (
			(state === "FOCUS" && pl.toLowerCase() === placeholder) ||
			state !== "FOCUS"
		);
	}

	return (
		<MotionGrid as='form' __css={styles}>
			<GridItem rowSpan={1} colSpan={1}>
				<FormStatus state={state} placeholder={placeholder} />
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconInput
					type='name'
					name='name'
					placeholder='Name'
					IconLeft={InputIcons.UserCard}
					IconRight={InputIcons.Checkmark}
					state={state}
					toggleState={toggleState}
					toggleFocus={(e: FocusEvent<HTMLInputElement>) => toggleFocus(e)}
					isFocused={isFocused("Name")}
				/>
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconInput
					type='email'
					name='email'
					placeholder='Email'
					IconLeft={InputIcons.Mail}
					IconRight={InputIcons.Checkmark}
					state={state}
					toggleState={toggleState}
					toggleFocus={(e: FocusEvent<HTMLInputElement>) => toggleFocus(e)}
					isFocused={isFocused("Email")}
				/>
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconTextarea
					name='message'
					state={state}
					placeholder='Message here!'
					IconLeft={InputIcons.TextAlignLeft}
					toggleState={toggleState}
					toggleFocus={(e: FocusEvent<HTMLTextAreaElement>) => toggleFocus(e)}
					isFocused={isFocused("message here!")}
				/>
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconButton
					state={state}
					name='submit'
					submitFn={() => {}}
					IconRight={InputIcons.LongRight}
					isFocusing={isFocused("submit")}
					disabled={false}
					toggleFocus={(e: FocusEvent<HTMLInputElement>) => toggleFocus(e)}>
					Send
				</FlushIconButton>
			</GridItem>
		</MotionGrid>
	);
}
