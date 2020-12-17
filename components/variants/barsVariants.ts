import {BarProps} from '../interfaces/Navigation';
// import colors from '../static/colors'


const bars:BarProps[] = [
  {variants: {
    open: {rotateZ: 225, y: 25},
    closed: {rotateZ: 0, y: 0}
  }},
  {variants: {
    open: {opacity: 0, rotateY: 180, rotateZ: 360, scale: 0},
    closed: {opacity: 1, rotateY: 0, rotateZ: 0, scale: 1}
  }},
  {variants: {
    open: {rotateZ: -225, y: -32},
    closed: {rotateZ: 0, y: 0}
  }}
]

export default bars;