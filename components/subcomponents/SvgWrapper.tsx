import React from 'react';
import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'

//* Styles
import footer from '../../styles/Footer.module.sass'

type Props = {
  href: string;
  filename: string;
  name: string;
}

export default function SvgWrapper(props:Props) {
  const SvgComponent = dynamic(() => import(`../icons/${props.filename}.svg`).then((mod) => mod.ReactComponent))

  return (
    <motion.a
      href={props.href}
      className={footer.svg_link}
      target="_blank"
    >
      <SvgComponent />
    </motion.a>
  )
}