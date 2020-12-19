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
      className={`${navlink.link}`}
      variants={navlinkVariants.link}
      whileHover={{ color: colors.prim}}
      animate={{color: props.isHovering ? colors.sec : colors.secMono, borderColor: `${props.isHovering ? colors.sec : colors.secMono}`}}
      onHoverStart={props.onHover}
      onTapStart={props.onHover}
      exit="closed"
    >
      {props.isHovering &&
        <motion.div
          layoutId="selector"
          layout
          className={navlink.selector}
          transition={{
            type: 'spring',
            duration: .5
          }}
        />
      }
      {props.isActive && 
        <motion.div
          layoutId="active" 
          layout
          className={navlink.active__selector}
          transition={{
            type: 'spring',
            duration: .3,
          }}
        />
      }
      <Link href={props.href}>
        <a onClick={props.isActive ? ()=>{} : props.onClick} className={props.isActive ? navlink.active : ''}>{props.title}</a>
      </Link>
    </motion.li>
  )
}