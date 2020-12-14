import {Variants} from 'framer-motion'

const variants: Variants = {
  open: {
    width: '100vw',
    background: 'rgba(21, 122, 110, 1)'
  },
  closed: {
    width: 110,
    background: `rgba(30,32,25, 0)`,
    transition: {
      duration: 1,
      delay: .5,
      type: 'spring'
    }
  }
}

export default variants;