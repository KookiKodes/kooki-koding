//* Packages
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

//* Interfaces
import {Nlink} from '../interfaces/Navigation';

//* Variants
import navlinkVariants from '../variants/navlinkVariants';
import colors from '../static/colors'

//* Style
import navlink from '../../styles/Navlink.module.sass'

export default function Navlink(props: Nlink) {
  return (
    <motion.li
      className={navlink.link}
      variants={navlinkVariants.link}
      whileHover={{scale: 1.5, color: colors.sec}}
      animate={{color: props.isHovering ? colors.sec : colors.secMono}}
      onHoverStart={props.onHover}
      onTapStart={props.onHover}
      exit="closed"
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