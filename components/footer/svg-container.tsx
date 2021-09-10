//packages
import { useState } from "react";
import { Tooltip } from "@chakra-ui/react";

//* Components
import { MotionFlex } from "@components/framer";
import { SVGLinkWrapper } from "@components/footer/svg-link-wrapper";

//* Interfaces
import SvgContainerProps from "@interfaces/footer/SvgContainer";

export function SvgContainer({
  Svgs,
  isHovering,
  toggleFocus,
}: SvgContainerProps) {
  const [hoveredLink, setHoveredLink] = useState("");
  return (
    <MotionFlex
      justifyContent="center"
      alignItems="center"
      w="1080px"
      h="min-content"
      pb=".5rem"
      color="inherit"
      layout
    >
      {Svgs.map((props, index: number) => {
        return (
          <SVGLinkWrapper
            key={index}
            containerIsHovered={isHovering}
            toggleFocus={() => {
              toggleFocus();
            }}
            hoveredLink={hoveredLink === props.name}
            setHoveredLink={() => setHoveredLink(props.name)}
            {...props}
          />
        );
      })}
    </MotionFlex>
  );
}
