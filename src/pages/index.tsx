import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ImFolderDownload } from 'react-icons/im'

import artbw from '../assets/art-bw.svg'
import Footer from '../components/Footer'
import Headbar from '../components/Headbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="" />
      </Head>
      <Head>
        <title>Felipe Diniz</title>
      </Head>
      <Headbar />

      <div className="mx-auto w-full items-center justify-center text-center">
        <motion.h1
          animate={{ y: 30 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-gradient-to-r from-pink-600 via-green-400 to-indigo-500 bg-clip-text text-center text-4xl font-extrabold text-transparent "
        >
          Felipe Diniz
        </motion.h1>
        <motion.div
          animate={{ y: 30 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Image
            alt="Diniz"
            className="w-full  border-solid"
            src={artbw}
            width="380"
            height="300"
          />
        </motion.div>

        <p className="pt-10 text-center text-[1rem] md:text-[1.1rem]">
          Desenvolvedor FullStack | Análise e desenvolvimento de sistemas =)
          <br />
          <span className="p-1 pt-10 text-[1rem] italic text-gray-500 md:text-[1.1rem]">
            Um louco apaixonado por programação, disposto a aprender cada vez
            mais.
          </span>
        </p>
        <motion.div
          animate={{ y: 25 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <a
            target="_blank"
            href="cv.pdf"
            className="mx-auto flex w-fit items-center justify-center gap-3 rounded-md bg-green-600 p-4 px-6 font-bold  leading-tight text-white"
          >
            <ImFolderDownload className="mb-1" />
            <span className="leading flex h-full items-center align-middle">
              Download CV
            </span>
          </a>
          <Footer />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
