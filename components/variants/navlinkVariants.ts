import {Variants} from 'framer-motion';
import themeTrasitionVariant from './themeTransitionVariant';

const container = (colors): Variants => {
  return {
    open: {
      transition: {staggerChildren: 0.1, delayChildren: 0.2},
    },
    closed: {
      transition: {staggerChildren: 0.05, staggerDirection: -1},
    },
    theme: {
      ...themeTrasitionVariant
    }
  }
}

const link = (colors): Variants => {
  return {
    open: {
      y: 0,
      opacity: 1,
      width: `100%`,
      transition: {
        y: {stiffness: 1000, velocity: -100, duration: .5}
      },
    },
    closed: {
      y: 1550,
      width: 0,
      opacity: 0,
      transition: {
        y: {stiffness: 1000, duration: .5}
      }
    },
    theme: {
      color: colors.bkSec.color,
      transition: {
        duration: .3,
        ease: 'easeIn'
      }
    }
  }
}

const hoverSelector = (colors): Variants => {
  return {
    theme: {
      background: colors.bkSec.color,
      boxShadow: `0 0 10px ${colors.bkDark.a(.8).color}`,
      transition: {
        duration: .3,
        ease: 'easeIn'
      }
    }
  }
}

const activeSelector = (colors): Variants => {
  return {
    theme: {
      background: colors.sec.a(.4).color,
      boxShadow:`0 0 5px ${colors.bkDark.a(.5).color}`,
      transition: {
        duration: .3,
        ease: 'easeIn'
      }
    }
  }
}

export default {
  container,
  link,
  hoverSelector,
  activeSelector,
}