import Navbar from '../components/Navbar'
import {motion, AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/router'
import '../styles/global.sass'

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <AnimatePresence>
      <Navbar />
      <motion.div key={router.route} transition={{duration: 1}}variants={variants} initial="initial" animate="animate" exit="exit" >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
