//* Packages
import React, {useState} from 'react';
import {AnimateSharedLayout, motion} from 'framer-motion'

//* Components
import Navlink from './Navlink';

//* Interfaces
import {NlinkContainer} from '../interfaces/Navigation'

//* Static
import navlinkVariants from '../static/navlinkVariants';

//* Styles
import navlink from '../../styles/Navlink.module.sass'

export default function NavlinkContainer(props: NlinkContainer) {
  const [hovering, setHovering] = useState('Home');

  return (
    <AnimateSharedLayout>
      <motion.ul
        className={navlink.container} 
        variants={navlinkVariants.container}
      >
        {props.links.map((link, index) => {
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
      </motion.ul>
    </AnimateSharedLayout>
  )
}