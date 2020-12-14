//* Packages
import React from 'react';
import {motion} from 'framer-motion';

//* Interfaces
import {BarProps, MenuBtnProps} from '../interfaces/Navigation'

//* Styles
import menu from '../../styles/MenuBtn.module.sass';

const MenuBar = (props: BarProps) => {
  return (
    <motion.div
      className={menu.bar}
      variants={props.variants} 
      transition={{
        duration: .5,
        type: 'spring'
      }}
    />
  )
}

export default function MenuBtn({toggleNavbar, bars}:MenuBtnProps) {
  return (
    <motion.button className={menu.btn} onClick={toggleNavbar}>
      {bars.map((bar, index) => {
        return <MenuBar variants={bar.variants} key={index} />
      })}
    </motion.button>
  )
}