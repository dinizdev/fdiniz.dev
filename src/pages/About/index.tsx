import Head from 'next/head'
import Image from 'next/image'

import dinizbw from '../../assets/diniz-bw.jpg'
import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'

export default function About() {
  return (
    <div>
      <Headbar />
      <Head>
        <title>About</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="itens-center flex w-full justify-center">
        <h1 className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 bg-clip-text p-20 text-left text-5xl font-extrabold text-transparent">
          About
        </h1>
      </section>
      <div>
        <nav>
          <ul>
            <a href=""></a>
          </ul>
        </nav>
        <section className="itens-center flex w-full justify-center">
          <Image
            alt="Diniz"
            className="rounded-3xl border-4 border-solid border-emerald-700"
            src={dinizbw}
            width="280"
            height="330"
          />
        </section>
        <section className="itens-center flex justify-center">
          <span className="p-10 text-center text-[1.2rem] text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            aspernatur suscipit possimus, ea non repudiandae consequatur
            corrupti odio autem, odit Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium voluptatibus reiciendis, optio eum in
            repellat! Aperiam ipsam sunt a fugiat quisquam, deserunt quis quo
            porro neque ex quidem. Culpa, quibusdam.
          </span>
        </section>
      </div>
      <Footer />
    </div>
  )
}
