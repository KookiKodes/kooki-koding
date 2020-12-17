import {BarProps} from '../interfaces/Navigation';
// import colors from '../static/colors'


const bars:BarProps[] = [
  {variants: {
    open: {rotateZ: 45, y: 25},
    closed: {rotateZ: 0, y: 0}
  }},
  {variants: {
    open: {opacity: 0},
    closed: {opacity: 1}
  }},
  {variants: {
    open: {rotateZ: -45, y: -32},
    closed: {rotateZ: 0, y: 0}
  }}
]

export default bars;