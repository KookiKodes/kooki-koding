import {Variants} from 'framer-motion'
import themeTrasitionVariant from './themeTransitionVariant';

const variants = (colors):Variants =>  {
  return {
    initial: {
      x: '25%',
      zIndex: 1,
      opacity: 0,
      color: colors.prim.color,
      background: colors.bkSec.color
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: .5,
        duration: .7,
        type:'spring'
      }
    },
    hidden: {
      x: '-25%',
      opacity: 0,
      zIndex: 2,
      transition: {
        delay: .2,
        duration: .5
      }
    },
    theme: {
      color: colors.prim.color,
      background: colors.bkSec.color,
      ...themeTrasitionVariant
    }
  }
}

export default variants;