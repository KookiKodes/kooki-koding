import * as React from "react";
import { useStyles } from "@chakra-ui/react";
import { MotionHeading } from "../framer";

interface Props {
	children: string;
}

export function Navtitle({ children }: Props) {
	const styles = useStyles();

	return (
		<MotionHeading sx={styles.title} transition={{ duration: 0.3 }} layout>
			{children}
		</MotionHeading>
	);
}
