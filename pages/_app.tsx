//* Packages
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {motion, AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/router'

//* Component
import Navbar from '../components/Navbar'

//* Variants
import variants from '../components/variants/pageVariants'

//* Style
import '../styles/global.sass'


function MyApp({ Component, pageProps }:AppProps) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <link href="/kooki-koding-favicon.png" rel="shortcut icon" />
      </Head>
      <AnimatePresence>
        <Navbar />
        <motion.div key={router.route} transition={{duration: 1}}variants={variants} initial="initial" animate="animate" exit="exit" >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
