//* packages
import { useStyles } from "@chakra-ui/react";

//* components
import { MotionText } from "@components/framer";

export function TextareaLineNumber({ max = 0, height = 0 }) {
	const styles = useStyles();

	return (
		<>
			{Array(max)
				.fill(0)
				.map((_, index) => {
					return (
						<MotionText __css={styles.icon} h={height} key={index}>
							{index + 1}
						</MotionText>
					);
				})}
		</>
	);
}
