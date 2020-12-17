//* Packages
import React, {SetStateAction, useState} from 'react';
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion'

//* Components
import Navlink from './Navlink';

//* Interfaces
import {NlinkContainer} from '../interfaces/Navigation'

//* Static
import navlinkVariants from '../variants/navlinkVariants';

//* Styles
import navlink from '../../styles/Navlink.module.sass'

export default function NavlinkContainer(props: NlinkContainer) {
  const [hovering, setHovering] = useState('null');

  return (
    <AnimateSharedLayout>
      <motion.ul
        className={navlink.container} 
        variants={navlinkVariants.container}
      >
        <AnimatePresence>
        {props.isOpen && props.links.map((link, index) => {
          return (
            <Navlink
              href={link.href}
              title={link.title}
              toggleNavbar={props.toggleNavbar}
              key={index}
              isHovering={hovering === link.title}
              onHover={() => setHovering(link.title)}
            />
          )
        })}
        </AnimatePresence>
      </motion.ul>
    </AnimateSharedLayout>
  )
}