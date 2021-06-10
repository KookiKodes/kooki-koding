import * as React from "react";
import { useStyles } from "@chakra-ui/react";
import { MotionSpan, MotionBox } from "../framer";

interface Props {
	charLeft: string;
	charRight: string;
	link: string;
}

export function ActiveLinkSelector({ charLeft, charRight, link }: Props) {
	const style = useStyles();

	return (
		<MotionSpan
			sx={style.activeLinkSelector}
			layoutId='activeLink'
			transition={{ type: "spring", damping: 13 }}>
			{charLeft}
			{<MotionSpan visibility='hidden'>{link}</MotionSpan>}
			{charRight}
		</MotionSpan>
	);
}
