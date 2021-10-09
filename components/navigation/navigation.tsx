//* Packages
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  useBoolean,
  useMultiStyleConfig,
  StylesProvider,
} from "@chakra-ui/react";

//* Components
import { Navtitle } from "./navtitle";
import { NavlinkContainer } from "./navlink-container";
import { MotionFlex, MotionNav } from "@components/framer";
import { MenuBtn } from "./menu-btn";

//* Static
import { NavigationLinks } from "@static/links";

interface Props {
  hideLinks: boolean;
  name: string;
  links: NavigationLinks;
}

export function Navigation({ hideLinks, name, links }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useBoolean();
  const [hoverSelector, setHoverSelector] = useState(links[0].name);
  const [hovering, setHovering] = useBoolean(false);
  const linksVisible = (hideLinks && isOpen) || !hideLinks;

  const styles = useMultiStyleConfig("Navigation", {
    variant: hideLinks && isOpen ? "navmenu" : "navbar",
    size: hideLinks && isOpen ? "isOpen" : "default",
  });

  return (
    <>
      <MotionNav
        sx={styles.container}
        transition={{
          type: "spring",
          bounce: 0.1,
          damping: 17,
        }}
        layout
      >
        <StylesProvider value={styles}>
          <MotionFlex sx={styles.position} layout>
            <MotionFlex
              alignItems="center"
              w="100%"
              justifyContent="space-between"
              layout
            >
              <Navtitle>{name.toLocaleLowerCase()}</Navtitle>
              {hideLinks && (
                <MenuBtn
                  state={isOpen ? "open" : "closed"}
                  toggleOpen={setIsOpen.toggle}
                />
              )}
            </MotionFlex>
            {linksVisible && (
              <NavlinkContainer
                activeRoute={router.asPath}
                links={links}
                closeOnLinkClick={() => setIsOpen.off()}
                hovering={hovering}
                setHovering={setHovering}
                hoverSelector={hoverSelector}
                setHoverSelector={setHoverSelector}
                shouldBeBlurred={hideLinks && isOpen}
              />
            )}
          </MotionFlex>
        </StylesProvider>
      </MotionNav>
    </>
  );
}
