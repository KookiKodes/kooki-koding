import React from "react";
import {
	forwardRef,
	ComponentWithAs,
	ChakraProps,
	chakra,
	Heading,
	Flex,
	VStack,
	LinkOverlay,
	Portal,
} from "@chakra-ui/react";
import { motion, MotionProps, isValidMotionProp } from "framer-motion";

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
	MotionProps & {
		as?: React.ElementType;
	};

export const MotionBox = motion(
	forwardRef<MotionBoxProps, "div">((props, ref) => {
		const chakraProps = Object.fromEntries(
			Object.entries(props).filter(([key]) => !isValidMotionProp(key))
		);
		return <chakra.div ref={ref} {...chakraProps} />;
	})
) as ComponentWithAs<"div", MotionBoxProps>;

export const MotionSpan = forwardRef((props, ref) => (
	<MotionBox as='span' ref={ref} {...props} />
));

export const MotionLinkOverlay = forwardRef((props, ref) => (
	<MotionBox as={LinkOverlay} ref={ref} {...props} />
));

export const MotionHeading = forwardRef((props, ref) => (
	<MotionBox as={Heading} ref={ref} {...props} />
));

export const MotionFlex = forwardRef((props, ref) => (
	<MotionBox as={Flex} ref={ref} {...props} />
));

export const MotionVStack = forwardRef((props, ref) => (
	<MotionBox as={VStack} ref={ref} {...props} />
));

export const MotionMain = forwardRef((props, ref) => (
	<MotionBox as='main' ref={ref} {...props} />
));

export const MotionNav = forwardRef((props, ref) => (
	<MotionBox as='nav' ref={ref} {...props} />
));
