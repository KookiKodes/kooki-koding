//* Packages
import React from 'react';
import {motion, useCycle} from 'framer-motion';

//* Variants
import links from './static/links';
import barVariants from './variants/barsVariants';
import navbarVariants from './variants/navbarVariants';

//* Components
import MenuBtn from './subcomponents/MenuBtn';
import NavlinkContainer from './subcomponents/NavlinkContainer'

//* Style
import navigation from '../styles/Navbar.module.sass';


export default function Navbar() {
  const [navView, setNavView] = useCycle(false, true);
  const [disable, toggleDisable] = useCycle(false,true);

  return (
    <motion.div
      className={navigation.navbar} 
      animate={navView ? 'open' : 'closed'}
      variants={navbarVariants}
      initial={false}
      transition={{
        duration: 1,
        damping: 16,
        type: 'spring'
      }}
      onAnimationStart={() => toggleDisable()}
      onAnimationComplete={() => toggleDisable()}
    >
      <MenuBtn 
        toggleNavbar={() => setNavView()} bars={barVariants} 
        isDisabled={disable}
      />
      <NavlinkContainer 
        links={links} 
        toggleNavbar={() => setNavView()} isOpen={navView}
      />
    </motion.div>
  )
}