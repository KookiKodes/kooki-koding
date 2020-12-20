import {Variants} from 'framer-motion'
import colors from '../static/colors'

const variants: Variants = {
  open: {
    width: '100%',
    height: '100%',
    background: colors.primMono
  },
  closed: {
    width: 110,
    background: `rgba(142,164,210, 0)`,
    transition: {
      duration: 1,
      delay: .3,
      type: 'spring'
    }
  }
}

export default variants;