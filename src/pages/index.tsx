import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ImFolderDownload } from 'react-icons/im'

import artbw from '../assets/art-bw.png'
import Footer from '../components/Footer'
import Headbar from '../components/Headbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felipe Diniz</title>
        <meta name="description" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="icon"
          href="/fav.svg"
          sizes="1080x1080"
          type="image/svg+xml"
        />

        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Headbar />

      <div className="mx-auto  w-full items-center justify-center text-center">
        <motion.h1
          animate={{ y: 50 }}
          className="bg-gradient-to-r from-pink-600 via-green-400 to-indigo-500 bg-clip-text text-center text-5xl font-extrabold text-transparent"
        >
          Felipe Diniz
        </motion.h1>
        <motion.div
          animate={{ y: 40 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Image
            alt="Diniz"
            className="rounded-3xl border-4 border-solid border-emerald-700"
            src={artbw}
            width="280"
            height="330"
          />
        </motion.div>
        <br />
        <br />
        <p className="text-let pt-10 text-[1.2rem]">
          Desenvolvedor FullStack | Análise e desenvolvimento de sistemas =)
          <br />
          <span className="p-1 pt-10 text-[1.1rem] text-gray-500">
            Um louco apaixonado por programação, disposto a aprender cada vez
            mais.
          </span>
        </p>
        <motion.div
          animate={{ y: 50 }}
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
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
