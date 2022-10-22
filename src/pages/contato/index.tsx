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
        animate={{ y: 30 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h1 className="bg-gradient-to-r from-orange-500 via-violet-500 to-violet-500 bg-clip-text p-5 text-center text-4xl font-extrabold text-transparent lg:text-5xl">
          Contrate-me =)
        </h1>
        <Mailer />
        <Footer />
      </motion.div>
    </div>
  )
}
