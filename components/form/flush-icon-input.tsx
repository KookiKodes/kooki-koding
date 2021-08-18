//* packages
import { StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
import * as React from "react";

//* components
import {
  MotionInput,
  MotionInputGroup,
  MotionInputLeftIcon,
  MotionInputRightIcon,
  MotionLabel,
} from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* hooks
import useComponentState from "@hooks/useComponentState";
import useScrollIntoView from "@hooks/useScrollIntoView";

//* interfaces
import { FlushIconInputProps as Props } from "@interfaces/form/FlushIconInput";

export function FlushIconInput(props: Props) {
  const [inputRef, triggerScrollTo] = useScrollIntoView<HTMLInputElement>({
    options: { block: "center", behavior: "smooth" },
  });
  const [mod, modUtils] = useComponentState("", ["hover", "focus", "disabled"]);
  const styles = useMultiStyleConfig("FlushIconInput", {
    variant: `${props.state}&${mod}`,
  });

  return (
    <MotionInputGroup __css={styles.container} ref={inputRef}>
      <StylesProvider value={styles}>
        {props.IconLeft && (
          <MotionLabel htmlFor={props.name}>
            <MotionInputLeftIcon __css={styles["icon-left-box"]}>
              <SVGWrapper SVG={props.IconLeft} styles={styles["icon-left"]} />
            </MotionInputLeftIcon>
          </MotionLabel>
        )}
        <MotionInput
          __css={styles.input}
          name={props.name}
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          onFocus={(e) => {
            props.toggleFocus(e), modUtils.on.focus(), triggerScrollTo();
          }}
          onBlur={(e) => {
            props.toggleFocus(e), modUtils.off.focus();
          }}
          onHoverStart={modUtils.on.hover}
          onHoverEnd={modUtils.off.hover}
        />
        {
          /*props.iconRight && (
          <MotionInputRightIcon __css={styles["icon-right-box"]}>
            <SVGWrapper SVG={IconRight} styles={styles["icon-right"]} />
          </MotionInputRightIcon>
        ) */
        }
      </StylesProvider>
    </MotionInputGroup>
  );
}

