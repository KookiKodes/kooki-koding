//* Packages
import * as React from "react";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionVStack, MotionBox } from "../framer";

//* Variants
import { bars } from "@variants/menubtnVariants";

interface Props {
	state: string;
	toggleOpen: () => void;
}

export function MenuBtn({ toggleOpen, state }: Props) {
	const styles = useStyles();

	return (
		<MotionVStack
			sx={styles.hamburgerBtn}
			onClick={toggleOpen}
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", damping: 12 }}
			layout>
			{bars.map(({ variants }, index) => {
				return (
					<MotionBox
						key={index}
						sx={styles.hamburgerBar}
						animate={state}
						variants={variants}
						transition={{ type: "spring", damping: 13 }}
					/>
				);
			})}
		</MotionVStack>
	);
}
