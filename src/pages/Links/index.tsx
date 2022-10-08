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
        <h1 className="bg-gradient-to-r from-green-500 via-green-400 to-indigo-500 bg-clip-text p-20 text-center text-xl font-extrabold text-transparent">
          Links
        </h1>
      </div>
      <div className="itens-center flex justify-center text-2xl">
        <h2>em breve links aqui...</h2>
      </div>
      <Footer />
    </div>
  )
}
