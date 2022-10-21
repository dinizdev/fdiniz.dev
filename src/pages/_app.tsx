import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="icon"
          href="/fav.svg"
          sizes="1080x1080"
          type="image/svg+xml"
        />
      </Head>
      <NextNprogress
        showOnShallow
        startPosition={0.3}
        height={3}
        color={'green'}
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
