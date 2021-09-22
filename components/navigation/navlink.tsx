//* Packages
import * as React from "react";
import NextLink from "next/link";
import { useStyles, useBreakpoint } from "@chakra-ui/react";

//* Components
import { MotionLinkOverlay, MotionSpan } from "../framer";
import { ActiveLinkSelector } from "./active-link-selector";
import { HoverLinkSelector } from "./hover-link-selector";

//* Interface
import NavlinkProps from "@interfaces/navigation/Navlink";

export function Navlink({
  name,
  to,
  active,
  hovering,
  hoverSelector,
  setHoverSelector,
  setFocus,
  setBlur,
  blurAmount,
  onClick,
}: NavlinkProps) {
  const styles = useStyles();

  return (
    <NextLink href={to}>
      <MotionLinkOverlay
        onClick={onClick}
        __css={styles.link}
        cursor={active ? "default" : "pointer"}
        onHoverStart={setHoverSelector}
        onFocus={setFocus}
        onBlur={setBlur}
        onKeyDown={(e) => (e.key === "Enter" ? e.target.click() : "")}
        animate={{ filter: blurAmount }}
        transition={{ duration: 0.45 }}
        zIndex="10"
        tabIndex={0}
        layout
      >
        {active && (
          <ActiveLinkSelector link={name} charLeft="[" charRight="]" />
        )}
        <MotionSpan zIndex="20">{name}</MotionSpan>
        {hoverSelector && (
          <HoverLinkSelector
            hasHoveredLink={hoverSelector}
            hovering={hovering}
            layoutId="navlinkHover"
            color="Primary.default.70"
          />
        )}
      </MotionLinkOverlay>
    </NextLink>
  );
}
