//* Packages
import * as React from "react";
import { MotionFlex } from "../framer";
import { useStyles } from "@chakra-ui/react";
import Scrollspy from "react-scrollspy";
import { useRouter } from "next/router";

//* Component
import { Navlink } from "./navlink";

//* Variants
import { linkContainer } from "@variants/navbarVariants";

//* Interface
import NavlinkContainerProps from "@interfaces/navigation/NavlinkContainer";

export function NavlinkContainer({
  links,
  activeRoute,
  hovering,
  setHovering,
  hoverSelector,
  setHoverSelector,
  shouldBeBlurred,
  closeOnLinkClick,
}: NavlinkContainerProps) {
  const styles = useStyles();
  const [active, setActive] = React.useState(activeRoute);
  const router = useRouter();

  return (
    <MotionFlex
      __css={styles.linkContainer}
      variants={linkContainer}
      onHoverStart={setHovering.on}
      onHoverEnd={setHovering.off}
      initial="initial"
      animate="enter"
      transition={{ type: "spring", damping: 12, delay: 0.15 }}
    >
      <Scrollspy
        style={{ all: "inherit" }}
        currentClassName=""
        items={links.map((link) => link.to.substr(1))}
        offset={-200}
        onUpdate={(e) => {
          setActive("/#" + e.id);
        }}
      >
        {links.map((link, index) => {
          const hover = hoverSelector === link.to;
          return (
            <Navlink
              key={index}
              active={
                active === "/" + link.to ||
                (active === "/" && link.to === "#aboutme")
              }
              hoverSelector={hover}
              setHoverSelector={() => setHoverSelector(link.to)}
              hovering={hovering}
              blurAmount={
                shouldBeBlurred && !hover ? "blur(2.5px)" : "blur(0px)"
              }
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
                  }, 900);
                }
              }}
              {...link}
            />
          );
        })}
      </Scrollspy>
    </MotionFlex>
  );
}
