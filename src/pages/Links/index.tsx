import Head from 'next/head'

import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'

export default function Links() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Links</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col space-x-16 text-center">
        <h1 className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 bg-clip-text p-20 text-center text-5xl font-extrabold text-transparent">
          Links
        </h1>
        <span className="flex gap-6">
          <a href="">Github</a>
          <a href="">Linkedin</a>
          <a href="">Twitter</a>
        </span>
      </div>
      <Footer />
    </div>
  )
}
