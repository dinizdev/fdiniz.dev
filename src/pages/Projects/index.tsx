/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
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
      <h1 className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 bg-clip-text p-20 text-left text-5xl font-extrabold text-transparent">
        Projects
      </h1>
      <Footer />
    </div>
  )
}
