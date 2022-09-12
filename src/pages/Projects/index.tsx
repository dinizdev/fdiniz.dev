import Head from 'next/head'

import Headbar from '../../components/Headbar'

export default function Projects() {
  return (
    <div>
      <Headbar />

      <Head>
        <title>Teste rota 3</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 bg-clip-text p-20 text-left text-5xl font-extrabold text-transparent">
        Projects
      </h1>
    </div>
  )
}
