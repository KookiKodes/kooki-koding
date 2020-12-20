//* Packages
import React from 'react'

//* Component
import SvgWrapper from './SvgWrapper'

//* Styles
import footer from '../../styles/Footer.module.sass'

//* Interfaces
import {IconInfo} from '../interfaces/Footer'

type Props = {
  icons: IconInfo[]
}

export default function SvgContainer(props: Props) {
  return (
    <div className={footer.svg_container}>
      {props.icons.map((icon, index) => {
        return <SvgWrapper href={icon.href} filename={icon.filename} key={index} name={icon.name}/>
      })}
    </div>
  )
}