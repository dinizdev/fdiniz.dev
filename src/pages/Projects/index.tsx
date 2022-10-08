import Head from 'next/head'

import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'

export default function Projects() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Projects</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="itens-center flex justify-center">
        <h1 className="bg-gradient-to-r from-green-500 via-green-400 to-indigo-500 bg-clip-text p-20 text-left text-xl font-extrabold text-transparent">
          Projetos
        </h1>
      </div>
      <Footer />
    </div>
  )
}
