//* Packages
import * as React from "react";
import {
	Text,
	Icon,
	useMultiStyleConfig,
	StylesProvider,
	useBoolean,
} from "@chakra-ui/react";

//* Components
import { SvgContainer } from "@components/footer/svg-container";
import { MotionBox } from "../framer";
import Copyright from "../../lib/icons/utility/copyright.svg";

//* Static
import Logos from "@static/icons";

export function Footer() {
	const [hoveredLink, setHoveredLink] = React.useState("");
	const [hovering, setHovering] = useBoolean(false);

	const date = new Date().getFullYear();
	const styles = useMultiStyleConfig("Footer", {});

	return (
		<MotionBox
			as={"footer"}
			__css={styles.container}
			onHoverStart={setHovering.on}
			onHoverEnd={setHovering.off}>
			<StylesProvider value={styles}>
				<SvgContainer
					hovering={hovering}
					hoveredLink={hoveredLink}
					setHoveredLink={setHoveredLink}
					setHovering={setHovering}
					Svgs={Logos}
				/>
				<Text fontSize='sm'>
					<Icon as={Copyright} fill='currentColor' /> Devin Jackson {date}
				</Text>
			</StylesProvider>
		</MotionBox>
	);
}
