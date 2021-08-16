import { FocusEvent, useState, useEffect } from "react";
import { GridItem, useStyleConfig } from "@chakra-ui/react";

//* Components
import { FormStatus } from "@components/form/form-status";
import { MotionGrid } from "@components/framer";
import { FlushIconInput } from "@components/form/flush-icon-input";
import { FlushIconButton } from "@components/form/flush-icon-button";
import { FlushIconTextarea } from "@components/form/flush-icon-textarea";

//* hooks
import useComponentState from "@hooks/useComponentState";

//* icons
import { InputIcons } from "@static/icons";

export function ContactForm() {
	const [state, stateUtils] = useComponentState("default",["invalid", "valid", "sending", "sent", "error"]);
	const [modifier, modUtils] = useComponentState("", ["hover", "focus", "disabled"]);
	const styles = useStyleConfig("ContactForm", { variant: `${state}&${modifier}`});
	const [placeholder, setPlaceholder] = useState("");
	
	useEffect(() => {
		// stateUtils.on.invalid();
	}, [])

	function toggleFocus(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { target, type } = e;
		switch(type) {
			case "focus":
				modUtils.on.focus();
				break;
			default:
				modUtils.off.focus();
		}
		target.scrollIntoView({ behavior: "smooth", block: "nearest" });
		if (target.placeholder) {
			setPlaceholder(target.placeholder.toLowerCase());
		} else setPlaceholder(target.name.toLowerCase());
	}

	return (
		<MotionGrid as='form' __css={styles} onHoverStart={() => modUtils.on.hover()} onHoverEnd={() => modUtils.off.hover()}>
			<GridItem rowSpan={1} colSpan={1}>
				<FormStatus state={state} placeholder={placeholder} modifier={modifier} />
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconInput
					type='name'
					name='name'
					placeholder='Name'
					IconLeft={InputIcons.UserCard}
					IconRight={InputIcons.Checkmark}
					state={state}
					toggleFocus={(e: FocusEvent<HTMLInputElement>) => toggleFocus(e)}
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
					toggleFocus={(e: FocusEvent<HTMLInputElement>) => toggleFocus(e)}
				/>
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconTextarea
					name='message'
					state={state}
					placeholder='Message here!'
					IconLeft={InputIcons.TextAlignLeft}
					toggleFocus={(e: FocusEvent<HTMLTextAreaElement>) => toggleFocus(e)}
					maxLineCount={50}
				/>
			</GridItem>
			<GridItem rowSpan={1} colSpan={1}>
				<FlushIconButton
					state={state}
					name='submit'
					submitFn={() => {}}
					IconRight={InputIcons.LongRight}
					disabled={false}
					toggleFocus={(e: FocusEvent<HTMLInputElement>) => toggleFocus(e)}>
					Send
				</FlushIconButton>
			</GridItem>
		</MotionGrid>
	);
}
