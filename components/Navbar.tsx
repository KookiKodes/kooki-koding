//* Packages
import React from 'react';
import {motion, useCycle} from 'framer-motion';

//* Static props
import links from './static/links';
import barVariants from './static/barsVariants';
import navbarVariants from './static/navbarVariants';

//* Components
import MenuBtn from './subcomponents/MenuBtn';
import NavlinkContainer from './subcomponents/NavlinkContainer'

//* Style
import navigation from '../styles/Navbar.module.sass';


export default function Navbar() {
  const [navView, setNavView] = useCycle('closed', 'open');

  return (
    <motion.div
      className={navigation.navbar} 
      animate={navView}
      variants={navbarVariants}
      initial={false}
      transition={{
        duration: 1,
        damping: 16,
        type: 'spring'
      }}
    >
      <MenuBtn toggleNavbar={() => setNavView()} bars={barVariants} />
      <NavlinkContainer links={links} toggleNavbar={() => setNavView()} />
    </motion.div>
  )
}