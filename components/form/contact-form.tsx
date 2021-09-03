import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  FormEvent,
} from "react";
import { GridItem, useStyleConfig } from "@chakra-ui/react";
import axios from "axios";
import serialize from "form-serialize";

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
  const iconRightRef = useRef<React.ComponentType | null>(null);
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
    // stateUtils.switch.error();
    updateMessage();
  }, []);

  function getValue(name: string): string {
    if (ref.current) {
      return Array.from(ref.current).reduce((value, input) => {
        const castedInput = input as HTMLInputElement,
          inputName = castedInput.getAttribute("name");
        if (inputName === name) value = castedInput.value;
        return value;
      }, "");
    }
    return "";
  }

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
      case stateUtils.is.error():
        iconRightRef.current = InputIcons.ErrorOutline;
        return setMessage(
          `Thank you ${getValue(
            "name"
          )}, unfortunately your message failed to send.`
        );
      case stateUtils.is.sent():
        iconRightRef.current = InputIcons.Checkmark;
        return setMessage(
          `Thank you ${getValue(
            "name"
          )}, your message was sent successfully. I look forward to speaking with you soon!`
        );
      case stateUtils.is.sending():
        iconRightRef.current = InputIcons.Loading;
        return setMessage(`Thank you! Your message is currently being sent.`);
      case stateUtils.is.valid():
        iconRightRef.current = InputIcons.Checkmark;
        return setMessage(
          `It looks like the form is good to go, press the send button whenever you're ready!`
        );
      case stateUtils.is.invalid() && modUtils.is.focus():
        iconRightRef.current = InputIcons.Close;
        let message: string | string[] = validator.getInvalidMessage(
          name as string
        );
        if (message.length === 0)
          message = `There aren't any other errors for the ${name} field`;
        return setMessage(message);
      case (stateUtils.is.invalid() && modUtils.is.none()) ||
        (stateUtils.is.invalid() && modUtils.is.hover()):
        iconRightRef.current = InputIcons.Close;
        return setMessage(getInvalidNameMessage());
      case modUtils.is.focus():
        iconRightRef.current = null;
        return setMessage(`Please fill the field with your ${name}`);
      default:
        iconRightRef.current = null;
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = serialize(target, { hash: true });
    try {
      const response = await axios.post("/api/email", form);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MotionGrid
      as="form"
      onFocus={handleFocus}
      onBlur={handleFocus}
      __css={styles}
      onHoverStart={() => modUtils.on.hover()}
      onHoverEnd={() => modUtils.off.hover()}
      onSubmit={handleSubmit}
      method="POST"
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
          IconRight={iconRightRef.current}
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
          IconRight={iconRightRef.current}
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
          IconRight={
            iconRightRef.current ? iconRightRef.current : InputIcons.LongRight
          }
          disabled={false}
        >
          Send
        </FlushIconButton>
      </GridItem>
    </MotionGrid>
  );
}
