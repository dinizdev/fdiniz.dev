import Head from 'next/head'

import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'

export default function Links() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Links</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 bg-clip-text p-20 text-left text-5xl font-extrabold text-transparent">
        Links
      </h1>
      <div className="min-flex flex justify-center">
        <a target="_blank" className="">
          <span className="leading mx-auto  flex h-full w-fit items-center justify-center gap-3 rounded-md  bg-[#7d6ef4] p-4 px-6 align-middle font-bold leading-tight text-white">
            Fetch Links
          </span>
        </a>
      </div>
      <div className="grid h-56 grid-cols-2 content-center gap-4 text-center">
        <h2 className="text-center text-2xl">Data fetching links</h2>
      </div>
      <Footer />
    </div>
  )
}
