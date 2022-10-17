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
      <section className="itens-center flex w-full justify-center">
        <h1 className="bg-gradient-to-r from-green-500 via-green-400 to-indigo-500 bg-clip-text p-20 text-center text-4xl font-extrabold text-transparent">
          Sobre mim.
        </h1>
      </section>
      <motion.div
        animate={{ y: 40 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div>
          <section className="itens-center flex  justify-center">
            <Image
              alt="Diniz"
              className="rounded-3xl border-4 border-solid border-emerald-700"
              src={dinizbw}
              width="280"
              height="330"
            />
          </section>
          <section className="align-center min-w-md flex flex-wrap justify-center">
            <span className="  p-10 text-center text-[1.2rem] text-gray-500 ">
              Meu nome é Felipe, me chamam de Diniz e tenho 24 anos.
            </span>
            <span className=" p-10  text-center text-[1.2rem] italic text-gray-500 ">
              Sou programador fullstack, apaixonado por tecnologia. Atualmente
              estou cursando analise e desenvolvimento de sistemas na
              Universidade Positivo, tenho 1 ano de estudo com essas
              tecnologias: Html. Css. JavaScript. TypeScript. TailwindCss.
              NextJS e Ruby.
            </span>
          </section>
          <div className="min-w-md  flex flex-wrap  gap-5 p-4">
            <h2 className="py-5 text-2xl italic">Carreira</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
              ipsum soluta corporis incidunt, repudiandae tempora inventore
              saepe ipsa adipisci cupiditate, quo dolores officia labore rem
              magnam asperiores omnis possimus totam.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}
