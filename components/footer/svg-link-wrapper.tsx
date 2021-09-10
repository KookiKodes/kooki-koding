//* Packages
import * as React from "react";
import { useMultiStyleConfig, StylesProvider } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

//* Components
import { MotionLinkOverlay, MotionSpan } from "@components/framer";
import { HoverLinkSelector } from "@components/navigation/hover-link-selector";
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* hooks
import useComponentState from "@lib/hooks/useComponentState";

//* Interfaces
import SvgProps from "@interfaces/footer/Svg";

export function SVGLinkWrapper({
  href,
  SVG,
  containerIsHovered,
  toggleFocus,
  hoveredLink,
  setHoveredLink,
  name,
}: SvgProps) {
  const [state, utils] = useComponentState("default", ["hover", "focus"]);
  const styles = useMultiStyleConfig("SvgLinkWrapper", {
    variant: containerIsHovered ? "hover" : state,
  });

  return (
    <Tooltip
      label={`Link to my ${name}`}
      aria-label="A tooltip"
      bg="Primary.dark.solid"
      color="Primary.default.solid"
      openDelay={1000}
    >
      <MotionLinkOverlay
        href={href}
        target="_blank"
        rel="noopener"
        __css={styles.wrapper}
        onHoverStart={() => {
          utils.toggle.hover(), setHoveredLink();
        }}
        onHoverEnd={() => {
          utils.toggle.hover(), setHoveredLink();
        }}
        onFocus={() => {
          toggleFocus(), setHoveredLink(), utils.toggle.focus(), scrollTo();
        }}
        onBlur={() => {
          toggleFocus(), setHoveredLink(), utils.toggle.focus();
        }}
        layout
      >
        <StylesProvider value={styles}>
          {hoveredLink && (
            <HoverLinkSelector
              hasHoveredLink={utils.is.hover()}
              hovering={containerIsHovered}
              layoutId="footerSvgHover"
              color="primary.500.80"
            />
          )}
        </StylesProvider>
        <SVGWrapper SVG={SVG} styles={styles.svg} />
      </MotionLinkOverlay>
    </Tooltip>
  );
}
