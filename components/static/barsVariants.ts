import {BarProps} from '../interfaces/Navigation';

const creamColor = `rgba(255, 251, 189, 1)`;
const shamrockColor = `rgba(73, 159, 104, 1)`;

const bars:BarProps[] = [
  {variants: {
    open: {rotateZ: 45, y: 25, background: creamColor},
    closed: {rotateZ: 0, y: 0, background: shamrockColor}
  }},
  {variants: {
    open: {opacity: 0},
    closed: {opacity: 1}
  }},
  {variants: {
    open: {rotateZ: -45, y: -30, background: creamColor},
    closed: {rotateZ: 0, y: 0, background: shamrockColor}
  }}
]

export default bars;