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
        animate={{ y: 30 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="min-w-screen-lg  grid flex-col justify-center  ">
          <h1 className="bg-gradient-to-r from-orange-500 via-orange-400 to-violet-500 bg-clip-text p-5 text-center text-4xl font-extrabold text-transparent lg:text-5xl">
            Links
          </h1>

          <div className="text-md pl-7 lowercase">
            <h3 className="text-white-400 border-l-4 border-solid border-emerald-500  p-5 text-2xl font-bold  capitalize  lg:text-3xl">
              Meus Links Favoritos
            </h3>
            <nav className=" pl-16">
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
            <h3 className=" text-white-400 border-l-4 border-solid border-emerald-500 p-5 text-2xl font-bold capitalize  lg:text-3xl">
              Meus Apps Favoritos
            </h3>
            <div className="text-md justify-center pl-16 text-center lg:text-3xl">
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
          </div>
        </div>
        <br />
        <Footer />
      </motion.div>
    </div>
  )
}
