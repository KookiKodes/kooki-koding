//* Packages
import React from 'react';
import {motion} from 'framer-motion';

//* Variants
import typewriterVariants from '@components/variants/typewriterVariants'

//* Styles
import typewriter from '../../styles/Typewriter.module.sass';


interface TypewriterLetterProps {
    letter: string;
    colors: object;
}

export default function TypewriterLetter(props: TypewriterLetterProps) {

    return (
            <motion.p
                className={typewriter.letter}
                initial="initial"
                variants={typewriterVariants.letter(props.colors)} 
                transition={{duration: .05}}
            >
                {props.letter}
            </motion.p>
    )
}