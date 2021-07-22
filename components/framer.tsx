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
	Text,
	Icon,
	Link,
	Portal,
	Grid,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Button,
	ButtonGroup,
	IconButton,
	Textarea,
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

export const MotionLink = forwardRef((props, ref) => (
	<MotionBox as={Link} ref={ref} {...props} />
));

export const MotionHeading = forwardRef((props, ref) => (
	<MotionBox as={Heading} ref={ref} {...props} />
));

export const MotionFlex = forwardRef((props, ref) => (
	<MotionBox as={Flex} ref={ref} {...props} />
));

export const MotionGrid = forwardRef((props, ref) => (
	<MotionBox as={Grid} ref={ref} {...props} />
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

export const MotionIcon = forwardRef((props, ref) => (
	<MotionBox as={Icon} ref={ref} {...props} />
));

export const MotionInput = forwardRef((props, ref) => (
	<MotionBox as={Input} ref={ref} {...props} />
));

export const MotionInputGroup = forwardRef((props, ref) => (
	<MotionBox as={InputGroup} ref={ref} {...props} />
));

export const MotionInputLeftIcon = forwardRef((props, ref) => (
	<MotionBox as={InputLeftAddon} ref={ref} {...props} />
));

export const MotionInputRightIcon = forwardRef((props, ref) => (
	<MotionBox as={InputRightAddon} ref={ref} {...props} />
));

export const MotionButton = forwardRef((props, ref) => (
	<MotionBox as={Button} ref={ref} {...props} />
));

export const MotionButtonGroup = forwardRef((props, ref) => (
	<MotionBox as={ButtonGroup} ref={ref} {...props} />
));

export const MotionIconButton = forwardRef((props, ref) => (
	<MotionBox as={IconButton} ref={ref} {...props} />
));

export const MotionTextarea = forwardRef((props, ref) => (
	<MotionBox as={Textarea} ref={ref} {...props} />
));

export const MotionText = forwardRef((props, ref) => (
	<MotionBox as={Text} ref={ref} {...props} />
));

export const MotionLabel = forwardRef((props, ref) => (
	<MotionBox as='label' ref={ref} {...props} />
));
