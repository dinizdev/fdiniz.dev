import { motion } from 'framer-motion'
import Head from 'next/head'

import Footer from '../../components/Footer'
import Mailer from '../../components/FormMail'
import Headbar from '../../components/Headbar'

export default function hireme() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Contrate-me!</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        animate={{ y: 40 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h1 className="bg-gradient-to-r from-green-500  via-green-400 to-indigo-500 bg-clip-text p-20 text-center text-4xl font-extrabold text-transparent md:text-5xl ">
          Contrate-me =)
        </h1>
        <Mailer />
        <Footer />
      </motion.div>
    </div>
  )
}
