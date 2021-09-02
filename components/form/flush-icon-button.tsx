//* packages
import { useMultiStyleConfig } from "@chakra-ui/react";
import { useEffect } from "react";

//* components
import {
  MotionButton,
  MotionButtonGroup,
  MotionIconButton,
  MotionSpan,
} from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* hooks
import useComponentState from "@hooks/useComponentState";
import useScrollIntoView from "@hooks/useScrollIntoView";

//* interfaces
import { FlushIconButtonProps as Props } from "@interfaces/form/FlushIconButton";

export function FlushIconButton({
  name,
  state,
  children,
  submitFn,
  IconRight,
  disabled,
}: Props) {
  const [mod, modUtils] = useComponentState("", ["hover", "focus", "disabled"]);
  const [ref, triggerScrollTo] = useScrollIntoView({
    options: { block: "center", behavior: "smooth" },
  });
  const styles = useMultiStyleConfig("FlushIconButton", {
    variant: `${state}&${mod}`,
  });

  useEffect(() => {
    if (disabled) return modUtils.on.disabled();
    modUtils.off.disabled();
  }, [disabled]);

  return (
    <MotionButton
      __css={styles.button}
      name={name}
      role="group"
      type="submit"
      onClick={(e) => {
        if (modUtils.is.disabled()) {
          e.preventDefault();
          submitFn();
        }
      }}
      disabled={modUtils.is.disabled()}
      onFocus={(e) => {
        modUtils.on.focus(), triggerScrollTo();
      }}
      onBlur={(e) => {
        modUtils.off.focus();
      }}
      onHoverStart={modUtils.on.hover}
      onHoverEnd={modUtils.off.hover}
      arial-label="submit"
      ref={ref}
    >
      {children}
      <MotionSpan __css={styles.iconContainer}>
        <SVGWrapper SVG={IconRight} styles={styles.icon} />
      </MotionSpan>
    </MotionButton>
  );
}
