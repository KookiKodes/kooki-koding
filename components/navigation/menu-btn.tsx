//* Packages
import * as React from "react";
import { useStyles } from "@chakra-ui/react";

//* Components
import { MotionVStack, MotionBox } from "../framer";

//* Variants
import { bars } from "@variants/menubtnVariants";

//* Interface
import MenuBtnProps from "@interfaces/navigation/MenuBtn";

export function MenuBtn({ toggleOpen, state }: MenuBtnProps) {
	const styles = useStyles();

	return (
		<MotionVStack
			sx={styles.hamburgerBtn}
			onClick={toggleOpen}
			onKeyDown={(e) => (e.key === "Enter" ? toggleOpen() : "")}
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", damping: 12 }}
			tabIndex={0}
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
