import React, { useEffect } from 'react'
import {motion, useCycle, useIsPresent} from 'framer-motion'

//* Variants
import variants from '../components/variants/pageVariants'

//* Syles
import general from '../styles/general.module.sass'

interface Props {
  children: JSX.Element[] | JSX.Element
}

export default function Page({children}:Props) {
  const present = useIsPresent();

  return (
    <>
    {present &&
      (
        <motion.main initial="initial" className={general.page_container} variants={variants} animate={present ? 'visible' : 'hidden'} exit="hidden" transition={{duration: 1, delay: .5}}>
        {children} 
        </motion.main>
      )
    }
    </>
  )
}