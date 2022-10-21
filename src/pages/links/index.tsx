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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <motion.div
        animate={{ y: 60 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="align-center flex min-w-min justify-center  text-center">
          <h1 className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-green-500 bg-clip-text p-5 text-center text-4xl font-extrabold text-transparent">
            Links
          </h1>
        </div>
        <h3 className="p-10 text-2xl font-bold">Meus Links Favoritos</h3>
        <div className="text-md pl-20 lowercase">
          <nav className="">
            <ul>
              <ol className="list-disc">
                <li>
                  <a
                    className="list-disc text-sm lowercase  text-white underline underline-offset-4"
                    href="#"
                  >
                    FreeIcons
                  </a>
                </li>
                <li>
                  <a
                    className="list-disc text-sm lowercase  text-white underline underline-offset-4"
                    href="#"
                  >
                    Illustrations 2d
                  </a>
                </li>
              </ol>
            </ul>
          </nav>
        </div>
        <h3 className="p-10 text-2xl font-bold">Meus Apps Favoritos</h3>
        <div className="text-md justify-center pl-20 text-center">
          <nav className="flex text-left">
            <ul>
              <ol className="list-disc">
                <li>
                  <a
                    className="list-disc text-sm lowercase text-white underline underline-offset-4"
                    href="#"
                    target="_blank"
                  >
                    Figma
                  </a>
                </li>
                <li>
                  <a
                    className="list-disc text-sm lowercase text-white underline underline-offset-4"
                    href="#"
                    target="_blank"
                  >
                    Notion
                  </a>
                </li>
                <li>
                  <a
                    className="list-disc text-sm lowercase text-white underline underline-offset-4"
                    href="#"
                    target="_blank"
                  >
                    Spotify
                  </a>
                </li>
              </ol>
            </ul>
          </nav>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}
