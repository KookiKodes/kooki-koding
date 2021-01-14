//* Packages
import React from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useThemedContext } from 'kooki-components';

//* Static
import variants from '../variants/menubtnVariants'

//* Interfaces
import {BarProps, MenuBtnProps} from '../interfaces/Navigation'

//* Styles
import menu from '../../styles/MenuBtn.module.sass';

const MenuBar = (props:BarProps) => {
  const {colors} = useThemedContext();


  return (
    <motion.div
      className={menu.bar}
      variants={props.variants(colors)} 
      transition={{
        duration: .8,
        type: 'spring'
      }}
    />
  )
}

export default function MenuBtn({toggleNavbar, isDisabled}:MenuBtnProps) {
  const {colors} = useThemedContext();

  return (
    <motion.button
      layout="position"
      className={menu.btn} 
      onClick={toggleNavbar}
      whileHover={{scale: .8}}
      disabled={isDisabled}  
      variants={variants.button(colors)}
    >
      {variants.bars.map((bar, index) => {
        return <MenuBar variants={bar.variants} key={index} />
      })}
    </motion.button>
  )
}