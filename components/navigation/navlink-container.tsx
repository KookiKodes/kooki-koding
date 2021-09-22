//* Packages
import * as React from "react";
import { MotionFlex } from "../framer";
import { useStyles } from "@chakra-ui/react";

//* Component
import { Navlink } from "./navlink";

//* Variants
import { linkContainer } from "@variants/navbarVariants";

//* Interface
import NavlinkContainerProps from "@interfaces/navigation/NavlinkContainer";

export function NavlinkContainer({
  links,
  // linkRef,
  // linkContainerRef,
  activeRoute,
  hovering,
  setHovering,
  hoverSelector,
  setHoverSelector,
  shouldBeBlurred,
  closeOnLinkClick,
}: NavlinkContainerProps) {
  const styles = useStyles();
  return (
    <MotionFlex
      __css={styles.linkContainer}
      // ref={linkContainerRef}
      variants={linkContainer}
      onHoverStart={setHovering.on}
      onHoverEnd={setHovering.off}
      initial="initial"
      animate="enter"
      transition={{ type: "spring", damping: 12, delay: 0.15 }}
    >
      {links.map((link, index) => {
        const hover = hoverSelector === link.name;
        console.log(activeRoute);
        return (
          <Navlink
            key={index}
            active={activeRoute === "/" + link.to}
            hoverSelector={hover}
            setHoverSelector={() => setHoverSelector(link.name)}
            hovering={hovering}
            blurAmount={shouldBeBlurred && !hover ? "blur(2.5px)" : "blur(0px)"}
            setFocus={(e) => {
              setHoverSelector(link.name);
              setHovering.on();
            }}
            setBlur={(e) => {
              setHovering.off();
            }}
            onClick={(e) => {
              setHoverSelector(link.name);
              if (activeRoute === link.to) e.preventDefault();
              else {
                setTimeout(() => {
                  setHoverSelector("");
                  closeOnLinkClick();
                }, 700);
              }
            }}
            {...link}
          />
        );
      })}
    </MotionFlex>
  );
}
