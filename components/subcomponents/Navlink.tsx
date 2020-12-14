//* Packages
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

//* Interfaces
import {Nlink} from '../interfaces/Navigation';

//* Variants
import navlinkVariants from '../static/navlinkVariants';

//* Style
import navlink from '../../styles/Navlink.module.sass'

export default function Navlink(props: Nlink) {
  return (
    <motion.li
      layout
      className={navlink.link}
      variants={navlinkVariants.link}
      whileHover={{scale: 1.5, color: `rgba(255,251,189,1)`}}
      onHoverStart={props.onHover}
      onTapStart={props.onHover}
    >
      {props.isHovering &&
        <motion.div
          layoutId="selector"
          layout
          className={navlink.selector}
          initial={false}
          transition={{
            type: 'spring',
            duration: .5
          }}
        /> 
      }
      <Link href={props.href}>
        <a onClick={props.toggleNavbar}>{props.title}</a>
      </Link>
    </motion.li>
  )
}