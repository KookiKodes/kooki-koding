//* Packages
import * as React from "react";
import { useStyles } from "@chakra-ui/react";
import { MotionSpan } from "../framer";

//* Interfaces
import ActiveLinkSelectorProps from "@interfaces/navigation/ActiveLinkSelector";

export function ActiveLinkSelector({
  charLeft,
  charRight,
  link,
}: ActiveLinkSelectorProps) {
  const style = useStyles();

  return (
    <MotionSpan
      __css={style.activeLinkSelector}
      layoutId="activeLink"
      transition={{ type: "spring", damping: 13 }}
    >
      {charLeft}
      {<MotionSpan visibility="hidden">{link}</MotionSpan>}
      {charRight}
    </MotionSpan>
  );
}
