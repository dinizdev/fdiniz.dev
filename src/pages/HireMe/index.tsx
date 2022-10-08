import Head from 'next/head'

import Footer from '../../components/Footer'
import Mailer from '../../components/FormMail'
import Headbar from '../../components/Headbar'

export default function HireMe() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Contrate-me!</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="bg-gradient-to-r from-green-500 via-green-400 to-indigo-500 bg-clip-text p-20 text-center text-xl font-extrabold text-transparent">
          Contrate-me =)
        </h1>
        <Mailer />
        <Footer />
      </div>
    </div>
  )
}
