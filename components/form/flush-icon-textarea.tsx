//* packages
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { StylesProvider, useMultiStyleConfig } from "@chakra-ui/system";

//* components
import { MotionFlex, MotionLabel, MotionTextarea } from "@components/framer";
import { SVGWrapper } from "@components/utilities/svg-wrapper";
import { TextareaLineNumber } from "./textarea-line-number";

//* interfaces
import { FlushIconTextareaProps as Props } from "@interfaces/form/FlushIconTextarea";

//* helpers
import { countLines } from "@helper/countLines";
import calcHeight from "@helper/calcHeight";

//* hooks
import useComputedStyle from "@hooks/useComputedStyle";
import useDimensions from "@hooks/useDimensions";
import useScrollIntoView from "@hooks/useScrollIntoView";
import { useBuffer } from "@hooks/useBuffer";

//* static
import { bufferCss, computedCss } from "@lib/static/flush-input-textarea";
import useComponentState from "@lib/hooks/useComponentState";

export function FlushIconTextarea({
  IconLeft,
  required,
  name,
  state,
  placeholder,
  maxLineCount = Infinity,
}: Props) {
  const [mod, modUtils] = useComponentState("", ["hover", "focus", "disabled"]);
  const [lines, setLines] = useState<number>(1);
  const value = useRef<string>("");
  const [textarea, triggerScrollTo] = useScrollIntoView<HTMLTextAreaElement>({
    options: { block: "nearest", behavior: "smooth" },
  });
  const [width, _] = useDimensions(textarea);
  const cs = useComputedStyle<HTMLTextAreaElement>(
    textarea as MutableRefObject<HTMLTextAreaElement>,
    computedCss
  );
  const buffer = useBuffer("textarea", cs, bufferCss);
  const styles = useMultiStyleConfig("FlushIconTextarea", {
    variant: `${state}&${mod}`,
  });

  function updateLines() {
    const count = countLines<HTMLTextAreaElement>(
      textarea.current as HTMLTextAreaElement,
      buffer,
      cs
    );
    if (count <= maxLineCount) setLines(count);
    if (textarea.current) {
      if (count > maxLineCount) textarea.current.value = value.current;
      else value.current = textarea.current.value;
    }
  }

  useEffect(() => {
    if (buffer) {
      updateLines();
    }
  }, [width]);

  useEffect(() => {
    // modUtils.on.disabled();
  }, []);

  const showIcon = () => {
    if (textarea.current) {
      return (
        !textarea.current.value && !modUtils.is.hover() && !modUtils.is.focus()
      );
    }
    return true;
  };

  return (
    <MotionFlex
      __css={styles.container}
      role="group"
      onHoverStart={modUtils.on.hover}
      onHoverEnd={modUtils.off.hover}
    >
      <StylesProvider value={styles}>
        <MotionFlex
          as="label"
          htmlFor={name}
          __css={showIcon() ? styles.iconContainer : styles.lineContainer}
          minH={calcHeight(lines, cs)}
        >
          {!showIcon() && (
            <TextareaLineNumber
              max={lines}
              height={calcHeight(lines, cs)}
              cs={cs}
            />
          )}
          {showIcon() && <SVGWrapper SVG={IconLeft} styles={styles.icon} />}
        </MotionFlex>
        <MotionTextarea
          ref={textarea}
          name={name}
          type="message"
          id={name}
          wrap="hard"
          onChange={(e) => {
            updateLines(), required ? required(e) : null;
          }}
          placeholder={placeholder}
          __css={styles.textarea}
          minH={calcHeight(lines, cs)}
          h={showIcon() ? "50px" : "150px"}
          onFocus={(e) => {
            modUtils.on.focus(), triggerScrollTo();
          }}
          onBlur={(e) => {
            modUtils.off.focus();
          }}
          disabled={modUtils.is.disabled()}
        />
      </StylesProvider>
    </MotionFlex>
  );
}
