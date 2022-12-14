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
        className="min-w-screen-lg  grid flex-col justify-center md:justify-items-start"
      >
        <section className="itens-center flex flex-col w-full">
          <h1 className="bg-gradient-to-r from-green-500 via-green-400 to-indigo-500 bg-clip-text p-5 text-center text-3xl font-extrabold text-transparent">
            Sobre mim.
          </h1>
        
        <div className="max-w-screen-xl grid-cols-2 grid-rows-none place-items-center content-center md:grid p-10">
          
          <section className=" min-w-sm grid grid-cols-2 sm:grid-flow-row">
          <section className="">
            <Image
              alt="Diniz"
              className="rounded-3xl border-4 border-solid border-emerald-700 "
              src={dinizbw}
              width="300"
              height="410"
            />
          </section>
            <span className="text-left text-[1rem] text-gray-300 p-5">
              Meu nome é Felipe, me chamam de Diniz e tenho 24 anos.
            
            {/* <span className="mb-8 sm:text-2xl md:hidden lg:hidden">
              Role para baixo
            </span> */}
            <span className=" p-5 text-left text-[1rem] italic text-gray-400 ">
              Sou programador fullstack, apaixonado por tecnologia. Atualmente
              graduando análise e desenvolvimento de sistemas na
              Universidade Positivo, tenho 1 ano de estudos com essas
              tecnologias: Html5 - Css - JavaScript - TypeScript - TailwindCss -NextJS e Ruby.
              </span>
            </span>
          </section>
        </div>
        </section>
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
            Participei de projetos de código aberto,
            envolvendo a comunidade programeiros, com a
            ajuda dos demais membros, na plataforma do
            site.
          </p>
          <p className="text-zinc-500">ago. 2016 - ago. 2021</p>
          <span>
            <p className="text-lg font-bold">Projeto Proprietário</p>
            <a
              href="https://github.com/dinizdev/fdiniz.dev"
              target="_blank"
              className="text-md gap-2 normal-case text-white underline underline-offset-8"
              rel="noreferrer"
            >
              Portfólio Fdiniz.dev
            </a>
          </span>
          <p className="text-left italic">
            Desenvolvimento do Meu Portfólio Fdiniz, usando as tecnologias
            abaixo.
          </p>
          <ul>
            <li className=" hover:text-violet-500">Next JS</li>
            <li className=" hover:text-emerald-600">TailwindCSS</li>
            <li className=" hover:text-orange-600">Framer Motion</li>
          </ul>
          <p className="text-zinc-500">set. 2022</p>
        </div>
      </motion.div>
        <Footer />
    </div>
  )
}
