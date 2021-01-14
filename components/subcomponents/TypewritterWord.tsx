//* Packages
import React from 'react';
import {motion, useIsPresent} from 'framer-motion';

//* Variants
import typewriterVariants from '@components/variants/typewriterVariants'

//* Components
import TypewriterLetter from './TypewritterLetter';
import InsertionCursor from './InsertionCursor';

//* Styles
import typewriter from '../../styles/Typewriter.module.sass';

//* Interfaces
import {WordProps} from '../interfaces/Typewriter'


export default function TypewriterWord(props: WordProps) {
    const [isTyping, setIsTyping] = React.useState(true);
    const animWord = props.word.substring(props.start || 0).split('');
    const isPresent = useIsPresent();

    function start() {
        if (isPresent) setIsTyping(true);
    }

    function end() {
        if (isPresent) props.animComplete();
        setIsTyping(false);
    }

    return (
        <motion.div
            className={typewriter.word}
            variants={typewriterVariants.container(props.colors)} 
            animate={["write", "theme"]}
            exit="erase"
            onAnimationStart={start}
            onAnimationComplete={end}
        >
            {props.start &&
                <motion.span className={typewriter.letter}>
                    {props.word.substring(0, props.start)}
                </motion.span> 
            }
            {
                animWord.map((letter, index) => {
                    let key = index + (props.wordIndex * 1000);
                    return (
                        <TypewriterLetter
                            key={key}
                            letter={letter}
                            colors={props.colors}
                        />
                    )
                })
            }
            <InsertionCursor isTyping={isTyping} />
        </motion.div>
    )
}