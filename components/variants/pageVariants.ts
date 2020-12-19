import {Variants} from 'framer-motion'

const variants:Variants = {
  initial: {
    x: '25%',
    zIndex: 1,
    opacity: 0,
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
  }
}

export default variants;