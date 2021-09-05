import React, { useEffect, useRef, useState, FormEvent } from "react";
import { GridItem, useStyleConfig } from "@chakra-ui/react";
import axios from "axios";
import serialize from "form-serialize";
import { DateTime } from "luxon";

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

//* interfaces
import { ResponseObject } from "@helper/emailApi/emailInterfaces";
import calcMinFromLastRequest from "@helper/emailApi/calcMinFromLastRequest";

const testGroups = [
  TestGroup.EmailTestGroup(),
  TestGroup.TextTestGroup(),
  TestGroup.MessageTestGroup(),
];

export function ContactForm() {
  const iconRightRef = useRef<React.ComponentType | null>(null);
  const responseRef = useRef<ResponseObject | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const allDisabled = useRef<boolean>(false);
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
  const [ref, scrollIntoView] = useScrollIntoView<HTMLFormElement>({
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
    onFormLoad();
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

  function updateMessage({ name }: { name?: string }) {
    const response = responseRef.current;
    switch (true) {
      case stateUtils.is.error():
        iconRightRef.current = InputIcons.ErrorOutline;
        if ((response?.remainingTimeInMinutes as number) < 5) {
          const int = setInterval(() => {
            const time = DateTime.now();
            const minutes = (response?.remainingTimeInSeconds as number) / 60;
            const timeInfo = calcMinFromLastRequest(
              time,
              response?.isoTime as string,
              minutes
            );
            if (timeInfo.remainingTimeInSeconds === 0) clearInterval(int);
            else
              setMessage(
                "I'm sorry, you cannot send a message for another " +
                  timeInfo.formatedDuration
              );
          }, 1000);
        }
        return setMessage(response ? response.message : "");
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
        return setMessage(getInvalidNameMessage(validator));
      case modUtils.is.focus():
        iconRightRef.current = null;
        if (name === "submit") {
          return setMessage(
            "Press me whenever you're ready to send your message :) !"
          );
        }
        return setMessage(`Please fill the field with your ${name}`);
      default:
        iconRightRef.current = null;
        return setMessage(
          "Thank you for stopping by. How may I help you today?"
        );
    }
  }

  function onChange(event: CustomEvent<UseValidationEventObj>) {
    updateMessage({ name: event.detail?.name });
  }

  function onValid(event: CustomEvent<UseValidationEventObj>) {
    stateUtils.switch.valid();
    updateMessage({ name: event.detail?.name });
  }

  function onInvalid(event: CustomEvent<UseValidationEventObj>) {
    if (!stateUtils.is.invalid()) {
      stateUtils.switch.invalid();
    }
    updateMessage({ name: event.detail?.name });
  }

  function handleFocus(event) {
    modUtils.toggle.focus();
    updateMessage({ name: event.target.name });
  }

  async function onFormLoad() {
    try {
      const response = await axios.get("/api/email");
      responseRef.current = response.data;
      const { remainingTimeInSeconds } = response.data;
      if (response.data.disabled) {
        allDisabled.current = true;
        stateUtils.switch.error();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          allDisabled.current = false;
          stateUtils.switch.default();
          updateMessage({});
        }, remainingTimeInSeconds * 1000);
      }
      updateMessage({});
    } catch (err) {
      throw err;
    }
  }

  async function onSending(form) {
    scrollIntoView();
    modUtils.switch.none();
    allDisabled.current = true;
    stateUtils.switch.sending();
    updateMessage({});
    return await axios.post("/api/email", form);
  }

  function onSent() {
    const response = responseRef.current;
    allDisabled.current = true;
    stateUtils.switch.sent();
    if (response) setToDefault(response);
  }

  function onError() {
    const response = responseRef.current;
    if (response) allDisabled.current = response?.disabled;
    stateUtils.switch.error();
  }

  function setToDefault(response) {
    const { remainingTimeInSeconds } = response;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      allDisabled.current = false;
      stateUtils.switch.default();
      updateMessage({});
    }, remainingTimeInSeconds * 1000);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = serialize(target, { hash: true });

    try {
      const response = await onSending(form);
      responseRef.current = response.data;
      await delay(2);
      if (response.data.status < 300) {
        onSent();
      } else if (response.data.status === 429) {
        onError();
        setToDefault(responseRef.current);
      } else {
        onError();
      }
      updateMessage({});
    } catch (error) {}
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
          disabled={allDisabled.current}
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
          disabled={allDisabled.current}
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
          disabled={allDisabled.current}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <FlushIconButton
          state={state}
          name="submit"
          IconRight={
            iconRightRef.current ? iconRightRef.current : InputIcons.LongRight
          }
          disabled={allDisabled.current}
        >
          Send
        </FlushIconButton>
      </GridItem>
    </MotionGrid>
  );
}

function delay(n) {
  return new Promise(function(resolve) {
    setTimeout(resolve, n * 1000);
  });
}

function getInvalidNameMessage(validator) {
  return `Please correct the following fields: ${validator
    .getInvalidFieldNames()
    .map((name, index, arr) =>
      index + 1 === arr.length && arr.length > 1
        ? `and ${firstToUpper(name)}`
        : firstToUpper(name)
    )
    .join(", ")}`;
}
