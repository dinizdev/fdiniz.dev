import { motion } from 'framer-motion'
import Head from 'next/head'

import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'

export default function links() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Links</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        animate={{ y: 40 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="flex flex-col space-x-16 text-center">
          <h1 className="bg-gradient-to-r from-green-500 via-green-400 to-indigo-500 bg-clip-text p-10 text-center text-4xl font-extrabold text-transparent">
            Links
          </h1>
        </div>
        <div className="itens-center flex justify-center text-2xl">
          <h2>em breve links aqui...</h2>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}
