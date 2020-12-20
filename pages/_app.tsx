//* Packages
import type {AppProps} from 'next/app'
import {AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/router'

//* Component
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Footer from '../components/Footer'

//* Style
import '../styles/global.sass'

function MyApp({ Component: Route, pageProps }:AppProps) {
  const router = useRouter();

  return (
    <>
      <Navbar/>
      <AnimatePresence initial={false}>
        <Page key={router.route}>
          <Route {...pageProps}  />
        </Page>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
