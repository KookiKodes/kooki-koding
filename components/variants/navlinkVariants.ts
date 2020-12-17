import {Variants} from 'framer-motion';

const container: Variants = {
  open: {
    transition: {staggerChildren: 0.1, delayChildren: 0.2},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  }
}

const link: Variants = {
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
  }
}

export default {
  container,
  link
}