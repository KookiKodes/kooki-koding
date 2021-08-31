import { FocusEvent, useEffect, useState, useCallback } from "react";
import { GridItem, useStyleConfig } from "@chakra-ui/react";

//* Components
import { FormStatus } from "@components/form/form-status";
import { MotionGrid } from "@components/framer";
import { FlushIconInput } from "@components/form/flush-icon-input";
import { FlushIconButton } from "@components/form/flush-icon-button";
import { FlushIconTextarea } from "@components/form/flush-icon-textarea";

//* helpers
import { TestGroup } from "@helper/Test";
import { firstToUpper } from "@helper/utilities";

//* hooks
import useComponentState from "@hooks/useComponentState";
import useScrollIntoView from "@hooks/useScrollIntoView";
import useValidation, { UseValidationEventObj } from "@hooks/useValidation";

//* icons
import { InputIcons } from "@static/icons";

const testGroups = [
  TestGroup.EmailTestGroup(),
  TestGroup.TextTestGroup(),
  TestGroup.MessageTestGroup(),
];

export function ContactForm() {
  const [state, stateUtils] = useComponentState("default", [
    "invalid",
    "valid",
    "sending",
    "sent",
    "error",
  ]);
  const [modifier, modUtils] = useComponentState("none", [
    "hover",
    "focus",
    "disabled",
  ]);
  const styles = useStyleConfig("ContactForm", {
    variant: `${state}&${modifier}`,
  });
  const [message, setMessage] = useState<string | string[]>("");
  const [ref, _] = useScrollIntoView<HTMLFormElement>({
    onLoad: true,
    options: { block: "center", behavior: "smooth" },
  });

  const validator = useValidation({
    ref,
    testGroups,
    onChange,
    onValid,
    onInvalid,
  });

  useEffect(() => {
    // stateUtils.switch.valid();
    updateMessage();
  }, []);

  function updateMessage(name?: string) {
    if (name === "submit") {
      switch (name) {
        default:
          return setMessage(
            "Press me whenever you're ready to send your message"
          );
      }
    }
    switch (true) {
      case stateUtils.is.valid():
        return setMessage(
          `It looks like the form is good to go, press the send button whenever you're ready!`
        );
      case stateUtils.is.invalid() && modUtils.is.focus():
        let message: string | string[] = validator.getInvalidMessage(
          name as string
        );
        if (message.length === 0)
          message = `There aren't any other errors for the ${name} field`;
        return setMessage(message);
      case (stateUtils.is.invalid() && modUtils.is.none()) ||
        (stateUtils.is.invalid() && modUtils.is.hover()):
        return setMessage(getInvalidNameMessage());
      case modUtils.is.focus():
        return setMessage(`Please fill the field with your ${name}`);
      default:
        return setMessage(
          "Thank you for stopping by. How may I help you today?"
        );
    }
  }

  function onChange(event: CustomEvent<UseValidationEventObj>) {
    updateMessage(event.detail?.name);
  }

  function onValid(event: CustomEvent<UseValidationEventObj>) {
    stateUtils.switch.valid();
    updateMessage(event.detail?.name);
  }

  function onInvalid(event: CustomEvent<UseValidationEventObj>) {
    if (!stateUtils.is.invalid()) {
      stateUtils.switch.invalid();
    }
    updateMessage(event.detail?.name);
  }

  function getInvalidNameMessage() {
    return `Please correct the following fields: ${validator
      .getInvalidFieldNames()
      .map((name, index, arr) =>
        index + 1 === arr.length && arr.length > 1
          ? `and ${firstToUpper(name)}`
          : firstToUpper(name)
      )
      .join(", ")}`;
  }

  function handleFocus(event) {
    modUtils.toggle.focus();
    updateMessage(event.target.name);
  }

  return (
    <MotionGrid
      as="form"
      onFocus={handleFocus}
      onBlur={handleFocus}
      __css={styles}
      onHoverStart={() => modUtils.on.hover()}
      onHoverEnd={() => modUtils.off.hover()}
      ref={ref}
    >
      <GridItem rowSpan={1} colSpan={1}>
        <FormStatus state={state} message={message} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <FlushIconInput
          type="text"
          name="name"
          placeholder="Name"
          IconLeft={InputIcons.UserCard}
          IconRight={
            !stateUtils.is.invalid() ? InputIcons.Checkmark : InputIcons.Close
          }
          state={state}
          required={validator.validate}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <FlushIconInput
          type="email"
          name="email"
          placeholder="Email"
          IconLeft={InputIcons.Mail}
          IconRight={
            !stateUtils.is.invalid() ? InputIcons.Checkmark : InputIcons.Close
          }
          state={state}
          required={validator.validate}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <FlushIconTextarea
          name="message"
          state={state}
          placeholder="Message here!"
          IconLeft={InputIcons.TextAlignLeft}
          maxLineCount={50}
          required={validator.validate}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <FlushIconButton
          state={state}
          name="submit"
          submitFn={() => {}}
          IconRight={InputIcons.LongRight}
          disabled={false}
        >
          Send
        </FlushIconButton>
      </GridItem>
    </MotionGrid>
  );
}
