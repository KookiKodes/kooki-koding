// packages
import { Flex } from "@chakra-ui/react";

// components
import { SvgContainer } from "@components/footer/svg-container";

// hooks
import useComponentState from "@hooks/useComponentState";

//* static
import Logos from "@static/icons";

function SocialLinks() {
  const [_, utils] = useComponentState("none", ["hover", "focus"]);
  return (
    <Flex color="Primary.dark.solid" pt="1rem">
      <SvgContainer
        isHovering={utils.is.hover() || utils.is.focus()}
        toggleFocus={() => utils.toggle.focus}
        Svgs={Logos}
      />
    </Flex>
  );
}

export default SocialLinks;
