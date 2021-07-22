//* packages
import { useStyles } from "@chakra-ui/react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

//* components
import { MotionText } from "@components/framer";

//* hooks
import useRangeArr from "@hooks/useRangeArr";

interface Props {
	max: number;
	height: number;
	cs: { [key: string]: any };
}

export function TextareaLineNumber({ max = 0, height = 0, cs = {} }: Props) {
	const styles = useStyles();
	const getLineNumbers = useRangeArr(max);

	return (
		<MotionText
			__css={styles.line}
			h={height}
			font={cs.fontSize}
			fontSize={cs.fontSize}
			letterSpacing={cs.letterSpacing}
			whiteSpace={cs.whiteSpace}
			wordBreak={cs.wordBreak}
			wordSpacing={cs.wordSpacing}
			lineHeight={cs.lineHeight}>
			{getLineNumbers(max)}
		</MotionText>
	);
}
