import * as React from "react";
import { useMultiStyleConfig, StylesProvider } from "@chakra-ui/react";
import { MotionFlex } from "../framer";

interface Props {
	children?: JSX.Element | JSX.Element[] | undefined;
	menuRef: any;
}

export function Menu({ children, menuRef }: Props) {
	const styles = useMultiStyleConfig("Menu", {});

	return (
		<MotionFlex sx={styles.container} ref={menuRef} layout>
			<StylesProvider value={styles}>{children}</StylesProvider>
		</MotionFlex>
	);
}
