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
    transition: {
      y: {stiffness: 1000, velocity: -100}
    },
  },
  closed: {
    y: 150,
    opacity: 0,
    transition: {
      y: {stiffness: 1000}
    }
  }
}

export default {
  container,
  link
}