//* packages
import { StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
import { useEffect } from "react";

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
  const [mod, modUtils] = useComponentState("", ["hover", "focus", "disabled"]);
  const styles = useMultiStyleConfig("FlushIconInput", {
    variant: `${props.state}&${mod}`,
  });

  useEffect(() => {
    if (props.disabled) modUtils.switch.disabled();
    modUtils.off.disabled();
  }, [props.disabled]);

  return (
    <MotionInputGroup __css={styles.container}>
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
          onChange={props.required ? props.required : null}
          onFocus={(e) => {
            modUtils.on.focus();
          }}
          onBlur={(e) => {
            modUtils.off.focus();
          }}
          onHoverStart={modUtils.on.hover}
          onHoverEnd={modUtils.off.hover}
          disabled={props.disabled}
        />
        {props.IconRight && (
          <MotionLabel htmlFor={props.name}>
            <MotionInputLeftIcon __css={styles["icon-right-box"]}>
              <SVGWrapper SVG={props.IconRight} styles={styles["icon-right"]} />
            </MotionInputLeftIcon>
          </MotionLabel>
        )}
      </StylesProvider>
    </MotionInputGroup>
  );
}
