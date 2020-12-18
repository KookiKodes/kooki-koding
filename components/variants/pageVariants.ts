import {Variants} from 'framer-motion'

const variants:Variants = {
  initial: {
    x: '-100vw',
    transition: {
      duration: .5,
      delay: .5,
      type: 'spring'
    }
  },
  visible: {
    x: 0,
    rotateZ: 0
  },
  hidden: {
    x: '100vw',
    zIndex: 3,
    transition: {
      duration: 1
    }
  }
}

export default variants;