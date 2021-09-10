//* Packages
import * as React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { useBreakpoint, useStyleConfig } from "@chakra-ui/react";

//* Components
import { MotionMain } from "../framer";
import { Navigation } from "@components/navigation/navigation";
import { BgOverlay } from "./bg-overlay";
import { Footer } from "@components/footer/footer";

interface Props {
  children: JSX.Element | JSX.Element[];
  name: string;
}

export function Layout({ children, name }: Props) {
  const containerRef = React.useRef(null);
  const breakpoint = useBreakpoint();
  const styles = useStyleConfig("Layout", {});

  return (
    <>
      <MotionMain sx={styles} ref={containerRef}>
        <AnimateSharedLayout>
          <Navigation
            hideLinks={["base", "sm"].includes(breakpoint as string)}
            name={name}
          />
          {children}
          <Footer name={name} />
        </AnimateSharedLayout>
        {breakpoint && !["base", "sm"].includes(breakpoint) && <BgOverlay />}
      </MotionMain>
    </>
  );
}
