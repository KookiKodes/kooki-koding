import {Variants} from 'framer-motion'
import themeTrasitionVariant from './themeTransitionVariant';

const variants = (colors):Variants => {
  return {
    open: {
      width: '100%',
      height: '100%',
      background: colors.bkPrim.color
    },
    closed: {
      background: colors.bkPrim.color,
      boxShadow: `.15em 0 .3em ${colors.bkDark.a(.7).color}`,
      width: 110,
      transition: {
        duration: .9,
        delay: .3,
        type: 'spring'
      }
    },
    theme: {
      background: colors.bkPrim.color,
      ...themeTrasitionVariant
    }
  }
}

export default variants;