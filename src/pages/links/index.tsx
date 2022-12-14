import { motion } from 'framer-motion'
import Head from 'next/head'

import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'

export default function links() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Setup</title>
        <meta name="description" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <motion.div
        animate={{ y: 30 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="min-w-screen-lg  grid flex-col justify-center md:justify-items-start">
          <h1 className="bg-gradient-to-r from-orange-500 via-orange-400 to-violet-500 bg-clip-text p-5 text-center text-3xl lg:text-4xl font-extrabold text-transparent">
          Wallpapers, Ferramentas, Apps e mais.
          </h1>
          <div className="text-md pl-7 lowercase">
            <h3 className="text-white-400  p-5 text-lg lg:text-2xl font-medium  capitalize">
              Equipamentos
            </h3>
            <nav className="pl-16">
              <ul>
                <ol className="list-disc">
                  <li>
                    <a
                      className="list-disc text-sm normal-case  text-white underline "
                      href="#"
                    >
                      Notebook - Acer Aspire 5 A515 54 53 VN
                    </a>
                  </li>
                  <li>
                    <a
                      className="list-disc text-sm normal-case  text-white underline underline-offset-4"
                      href="#"
                    >
                      Monitor - Dell 24 P2419H Ips
                    </a>
                  </li>
                  <li>
                    <a
                      className="list-disc text-sm normal-case  text-white underline underline-offset-4"
                      href="#"
                    >
                      Teclado - Akko 3068b Cyan 60%
                    </a>
                  </li>
                </ol>
              </ul>
            </nav>
            <h3 className=" text-white-400  p-5 text-lg lg:text-2xl font-medium capitalize">
              Código
            </h3>
            <div className="text-sm justify-center pl-16 text-center">
              <nav className="flex text-left">
                <ul>
                  <ol className="list-disc">
                    <li>
                      <a
                        className="list-disc text-sm normal-case  text-white underline"
                        href="#"
                        target="_blank"
                      >
                        Editor - VS Code
                      </a>
                    </li>
                    <li>
                      <a
                        className="list-disc text-sm  normal-case text-white underline"
                        href="#"
                        target="_blank"
                      >
                        Tema VS Code - Omni OWl
                      </a>
                    </li>
                    <li>
                      <a
                        className="list-disc text-sm normal-case text-white underline underline-offset-4"
                        href="#"
                        target="_blank"
                      >
                        VS Code - Config
                      </a>
                    </li>
                    <li>
                      <a
                        className="list-disc text-sm normal-case text-white underline underline-offset-4"
                        href="#"
                        target="_blank"
                      >
                        Fonte - Dank Mono
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
