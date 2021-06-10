import React, { useEffect } from "react";
import { useStyleConfig } from "@chakra-ui/react";
import { MotionFlex } from "../framer";
import { useAnimation, useIsPresent, AnimateSharedLayout } from "framer-motion";

import variants from "@variants/pageVariants";

interface Props {
	children: JSX.Element | JSX.Element[];
	variant?: string;
	size?: string;
}

export function Page({ children, variant = "default", size = "auto" }: Props) {
	const present = useIsPresent();
	const container = useAnimation();
	const styles = useStyleConfig("Page", { variant, size });

	useEffect(() => {
		if (present) container.start("visible");
		else container.start("hidden");
	});

	return (
		<AnimateSharedLayout>
			{present && (
				<MotionFlex
					sx={styles}
					initial='initial'
					variants={variants}
					animate={container}
					exit='hidden'>
					{children}
				</MotionFlex>
			)}
		</AnimateSharedLayout>
	);
}
