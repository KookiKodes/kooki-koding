//* Packages
import React, {useState} from 'react'

//* Components
import IconContainer from './subcomponents/IconContainer'

//* Styles
import footer from '../styles/Footer.module.sass'

import icons from './static/icons'

export default function Footer() {
  return (
    <div className={footer.container}>
      <IconContainer icons={icons}/>
      <h5>&copy; Devin Jackson 2020</h5>
    </div>
  )
}