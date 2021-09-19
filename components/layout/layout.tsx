//* Packages
import { useRef, useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { useBreakpoint, useStyleConfig } from "@chakra-ui/react";

//* Components
import { MotionMain } from "../framer";
import { Navigation } from "@components/navigation/navigation";
import { BgOverlay } from "./bg-overlay";
import { Footer } from "@components/footer/footer";

//* static
import { NavigationLinks } from "@static/links";
interface Props {
  children: JSX.Element | JSX.Element[];
  name: string;
  links: NavigationLinks;
}

export function Layout({ children, name, links }: Props) {
  const containerRef = useRef(null);
  const breakpoint = useBreakpoint();
  const styles = useStyleConfig("Layout", {});

  return (
    <>
      <MotionMain sx={styles} ref={containerRef}>
        <AnimateSharedLayout>
          <Navigation
            hideLinks={["base", "sm"].includes(breakpoint as string)}
            name={name}
            links={links}
          />
          {children}
          <Footer name={name} />
        </AnimateSharedLayout>
        {breakpoint && !["base", "sm"].includes(breakpoint) && <BgOverlay />}
      </MotionMain>
    </>
  );
}
