//* Packages
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {motion, AnimatePresence, useIsPresent} from 'framer-motion'
import {useRouter} from 'next/router'

//* Component
import Navbar from '../components/Navbar'

//* Variants
import variants from '../components/variants/pageVariants'

//* Style
import '../styles/global.sass'
import general from '../styles/general.module.sass'


function MyApp({ Component, pageProps }:AppProps) {
  const router = useRouter();
  
  return (
    <>
      <Navbar />
      <AnimatePresence initial={false} >
        <motion.main initial="initial" className={general.page_container} variants={variants} animate='visible' exit="hidden" key={router.route}>
          <Component {...pageProps}  />
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default MyApp
