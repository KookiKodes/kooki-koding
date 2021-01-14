//* Packages
import React from 'react';
import {motion, useAnimation, useCycle} from 'framer-motion';
import {useThemedContext} from 'kooki-components'

//* Variants
import links from './static/links';
import navbarVariants from './variants/navbarVariants';

//* Components
import MenuBtn from './subcomponents/MenuBtn';
import NavlinkContainer from './subcomponents/NavlinkContainer'

//* Style
import navigation from '../styles/Navbar.module.sass';


export default function Navbar() {
  const container = useAnimation();
  const [navView, setNavView] = useCycle(false, true);
  const [disable, toggleDisable] = React.useState(false);
  const {colors, themeName} = useThemedContext();

  React.useEffect(() => {
    if (navView) container.start('open');
    else container.start('closed');
  }, [navView])

  React.useEffect(() => {
    container.start('theme')
  }, [themeName])

  return (
    <motion.div
      className={navigation.navbar} 
      animate={container}
      variants={navbarVariants(colors)}
      initial='theme'
      transition={{
        duration: 1,
        damping: 16,
        type: 'spring'
      }}
      onAnimationStart={() => toggleDisable(true)}
      onAnimationComplete={() => toggleDisable(false)}
    >
      <MenuBtn 
        toggleNavbar={() => setNavView()} 
        isDisabled={disable}
      />
      <NavlinkContainer 
        links={links} 
        toggleNavbar={() => setNavView()}
        isOpen={navView}
      />
    </motion.div>
  )
}