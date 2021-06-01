//* Packages
import * as React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { useBreakpoint, useStyleConfig } from "@chakra-ui/react";

//* Components
import { MotionMain } from "../framer";
import { Navigation } from "../navigation/navigation";
import { BgOverlay } from "./bg-overlay";

interface Props {
	children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: Props) {
	const containerRef = React.useRef(null);
	const breakpoint = useBreakpoint();
	const styles = useStyleConfig("Layout", {});

	return (
		<>
			<MotionMain sx={styles} ref={containerRef}>
				<AnimateSharedLayout>
					<Navigation
						containerRef={containerRef}
						hideLinks={["base", "sm"].includes(breakpoint as string)}
					/>
					{children}
				</AnimateSharedLayout>
				<BgOverlay />
			</MotionMain>
		</>
	);
}
