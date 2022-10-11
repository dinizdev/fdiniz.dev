import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        showOnShallow
        startPosition={0.3}
        height={3}
        color={'green'}
      />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
