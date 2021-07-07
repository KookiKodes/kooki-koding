//* packages
import { useMultiStyleConfig, StylesProvider } from "@chakra-ui/react";
import * as React from "react";

//* components
import {
  MotionInputLeftIcon,
  MotionInputRightIcon,
  MotionInput,
  MotionInputGroup,
} from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* interfaces
import { FlushIconInputProps as Props } from "@interfaces/form/FlushIconInput";
import { ContactFormStateTypes as State } from "@interfaces/form/ContactForm";

//* icons
import Mail from "@icons/input/mail.svg";
import UserCard from "@icons/input/user-card.svg";
import Checkmark from "@icons/input/checkmark.svg";

const icons = {
  "": "",
  mail: Mail,
  checkmark: Checkmark,
  "user-card": UserCard,
};

export function FlushIconInput(props: Props) {
  const styles = useMultiStyleConfig("FlushIconInput", {
    variant: props.state,
  });
  const IconLeft = icons[props.iconLeft ? props.iconLeft : ""];
  const IconRight = icons[props.iconRight ? props.iconRight : ""];

  return (
    <MotionInputGroup __css={styles.container}>
      <StylesProvider value={styles}>
        {props.iconLeft && (
          <MotionInputLeftIcon __css={styles["icon-left-box"]}>
            <SVGWrapper SVG={IconLeft} styles={styles["icon-left"]} />
          </MotionInputLeftIcon>
        )}
        <MotionInput
          __css={styles.input}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
        {props.iconRight && (
          <MotionInputRightIcon __css={styles["icon-right-box"]}>
            <SVGWrapper SVG={IconRight} styles={styles["icon-right"]} />
          </MotionInputRightIcon>
        )}
      </StylesProvider>
    </MotionInputGroup>
  );
}
