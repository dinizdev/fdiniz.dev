import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

import dinizbw from '../../assets/diniz-bw.jpg'
import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'

export default function about() {
  return (
    <div>
      <Headbar />
      <Head>
        <title>Sobre</title>
        <meta name="description" content="" />
      </Head>
      <motion.div
        animate={{ y: 30 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <section className="itens-center flex w-full justify-center">
          <h1 className="bg-gradient-to-r from-green-500 via-green-400 to-indigo-500 bg-clip-text p-5 text-center text-4xl font-extrabold text-transparent">
            Sobre mim.
          </h1>
        </section>
        <div className="max-w-screen-xl grid-cols-2 place-items-center content-center md:grid">
          <section className="itens-center flex justify-center">
            <Image
              alt="Diniz"
              className="rounded-3xl border-4 border-solid border-emerald-700 "
              src={dinizbw}
              width="300"
              height="390"
            />
          </section>
          <section className="align-center min-w-md flex flex-wrap justify-center">
            <span className="  p-10 text-center text-[1.2rem] text-gray-500 ">
              Meu nome é Felipe, me chamam de Diniz e tenho 24 anos.
            </span>
            <span className="mb-8 sm:text-2xl md:hidden lg:hidden">
              Role para baixo
            </span>
            <span className=" p-10  text-center text-[1.2rem] italic text-gray-500 ">
              Sou programador fullstack, apaixonado por tecnologia. Atualmente
              estou cursando analise e desenvolvimento de sistemas na
              Universidade Positivo, tenho 1 ano de estudo com essas
              tecnologias: Html. Css. JavaScript. TypeScript. TailwindCss.
              NextJS e Ruby.
            </span>
          </section>
        </div>
        <div className="min-w-md grid w-full grid-cols-1 flex-wrap gap-5 p-5 md:p-40">
          <h2 className="py-5 text-3xl italic">Carreira</h2>
          <span>
            <p className="text-lg font-bold">Open Source</p>
            <a
              href="https://t.me/ProgrameirosGroup"
              target="_blank"
              className="text-md gap-2 normal-case text-white underline underline-offset-8"
              rel="noreferrer"
            >
              Programeiros
            </a>
          </span>
          <p className="text-left italic">
            Participei de um projeto de codigo aberto, envolvendo a comunidade
            programeiros, na ajuda de membros, e na platarforma do site.
          </p>
          <p className="text-zinc-500">ago 2016 - ago 2021</p>
          <span>
            <p className="text-lg font-bold">Projeto Proprietario</p>
            <a
              href="https://github.com/dinizdev/fdiniz.dev"
              target="_blank"
              className="text-md gap-2 normal-case text-white underline underline-offset-8"
              rel="noreferrer"
            >
              Portifolio Fdiniz.dev
            </a>
          </span>
          <p className="text-left italic">
            Desenvolvimento do Meu Portifolio Fdiniz, usando as tecnlogias
            abaixo.
          </p>
          <ul>
            <li className=" hover:text-violet-500">Next JS</li>
            <li className=" hover:text-emerald-600">TailwindCSS</li>
            <li className=" hover:text-orange-600">Framer Motion</li>
          </ul>
          <p className="text-zinc-500">set 2022</p>
        </div>
        <Footer />
      </motion.div>
    </div>
  )
}
