import Head from 'next/head'

import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'
// eslint-disable-next-line import/no-unresolved
import Mailer from '../../components/Mailer'

export default function HireMe() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Hire Me!</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 bg-clip-text p-20 text-center text-5xl font-extrabold text-transparent">
          Hire me =)
        </h1>
        <Mailer />
        <Footer />
      </div>
    </div>
  )
}
