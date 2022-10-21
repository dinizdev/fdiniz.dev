import { motion } from 'framer-motion'
import Head from 'next/head'

import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'
import Repos from './repos'

export default function projetos() {
  return (
    <div>
      <Headbar />
      <Head>
        <title>Projetos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        animate={{ y: 60 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="itens-center flex  justify-center">
          <h1 className="bg-gradient-to-r from-green-500 via-violet-400 to-indigo-500 bg-clip-text p-5 text-left text-4xl font-extrabold text-transparent">
            Projetos
          </h1>
        </div>
        <div className="itens-center  flex justify-center text-2xl">
          <Repos />
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}
