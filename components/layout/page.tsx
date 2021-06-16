//* Packages
import React, { useEffect } from "react";
import { useStyleConfig } from "@chakra-ui/react";
import { MotionFlex } from "../framer";
import { useAnimation, useIsPresent, AnimateSharedLayout } from "framer-motion";

//* Variants
import variants from "@variants/pageVariants";

//* Interfaces
import PageProps from "@interfaces/layout/Page";

export function Page({
	children,
	variant = "default",
	size = "auto",
}: PageProps) {
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
