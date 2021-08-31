//* Packages
import * as React from "react";
import { Text, Icon, useStyleConfig } from "@chakra-ui/react";

//* Components
import { SvgContainer } from "@components/footer/svg-container";
import { MotionBox } from "../framer";
import Copyright from "../../lib/icons/utility/copyright.svg";

//* hooks
import useComponentState from "@lib/hooks/useComponentState";

//* Static
import Logos from "@static/icons";

//* hooks
import useScrollIntoView from "@lib/hooks/useScrollIntoView";

export function Footer() {
  const [state, utils] = useComponentState("default", ["hover", "focus"]);
  const date = new Date().getFullYear();
  const styles = useStyleConfig("Footer", { variant: state });

  return (
    <MotionBox
      as="footer"
      __css={styles}
      onHoverStart={utils.on.hover}
      onHoverEnd={utils.off.hover}
    >
      <SvgContainer
        isHovering={utils.is.hover() || utils.is.focus()}
        toggleFocus={() => utils.toggle.focus}
        Svgs={Logos}
      />
      <Text fontSize="sm" display="flex" alignItems="center">
        <Icon as={Copyright} fill="currentColor" mr={2} /> Devin Jackson {date}
      </Text>
    </MotionBox>
  );
}
