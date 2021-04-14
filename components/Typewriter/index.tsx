//* Packages
import React from "react";
import { useThemedContext } from "kooki-components";
import { motion, useCycle, AnimatePresence } from "framer-motion";

//* Components
import TypewriterWord from "./TypewriterWord";

//* Interfaces
import { TypewriterProps } from "@interfaces/TypewriterInterface";

export default function Typewriter(props: TypewriterProps) {
	const { colors } = useThemedContext();
	const [wordCycle, nextWordCycle] = useCycle(...props.words);

	return (
		<motion.div className='flex items-center justify-center h-40 select-none w-96'>
			<AnimatePresence exitBeforeEnter>
				{props.words.map((word, index) => {
					return (
						word === wordCycle && (
							<TypewriterWord
								key={word}
								word={word}
								wordIndex={index}
								colors={colors}
								start={props.start}
								animComplete={() => nextWordCycle()}
							/>
						)
					);
				})}
			</AnimatePresence>
		</motion.div>
	);
}
