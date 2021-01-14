import {Variants} from 'framer-motion'
import themeTrasitionVariant from './themeTransitionVariant';


const theme = (colors) => {
  return {
    background: colors.bkSec.color,
    boxShadow: `0 0 5px ${colors.bkSec.a(.8).color}`,
    ...themeTrasitionVariant
  }
}

const bars = [
  {variants(colors):Variants {
    return {
      open: {rotateZ: 225, y: '1.6em'},
      closed: {rotateZ: 0, y: '0rem'},
      theme: theme(colors)
    }
  }},
  {variants(colors): Variants {
    return {
      open: {opacity: 0, rotateY: 180, rotateZ: 360, scale: 0},
      closed: {opacity: 1, rotateY: 0, rotateZ: 0, scale: 1},
      theme: theme(colors),
    }
  }},
  {variants(colors) {
    return {
      open: {rotateZ: -225, y: '-1.5em'},
      closed: {rotateZ: 0, y: '0rem'},
      theme: theme(colors),
    }
  }}
]

const button = (colors): Variants => {
  return {
    theme: {
      ...themeTrasitionVariant
    }
  }
}

export default {
  bars,
  button
};