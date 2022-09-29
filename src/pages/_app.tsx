import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Headbar from '../components/Headbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Headbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
