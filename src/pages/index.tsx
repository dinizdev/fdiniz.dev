/* eslint-disable @next/next/no-page-custom-font */
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ImFolderDownload } from 'react-icons/im'

import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felipe Diniz</title>
        <meta name="description" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Quicksand:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto mt-40 w-full items-center justify-center text-center">
        <motion.h1 className="bg-gradient-to-r from-pink-600 via-purple-400 to-indigo-500 bg-clip-text text-center text-5xl font-extrabold text-transparent">
          Felipe Diniz
        </motion.h1>

        <p className="text-let pt-10 text-[1.2rem]">
          FullStack Developer | Systems analysis and development. =)
          <br />
          <span className="pt-10 text-[1.1rem] text-gray-500">
            Studying daily and perfecting myself to get a professional
            placement.
          </span>
        </p>
        <p className="pt-10 text-[1.1rem] text-gray-500"></p>
        <a
          target="_blank"
          href="cv.pdf"
          className="mx-auto flex w-fit items-center justify-center gap-3 rounded-md bg-[#7d6ef4] p-4 px-6 font-bold  leading-tight text-white"
        >
          <ImFolderDownload className="mb-1" />
          <span className="leading flex h-full items-center align-middle">
            Download CV
          </span>
        </a>
      </div>

      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  )
}

export default Home
