import Head from 'next/head'

import Headbar from '../../components/Headbar'

export default function About() {
  return (
    <div>
      <Headbar />
      <Head>
        <title>Teste rota 1</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 bg-clip-text p-20 text-left text-5xl font-extrabold text-transparent">
        About
      </h1>
      <div>
        <nav>
          <ul>
            <a href=""></a>
          </ul>
        </nav>
      </div>
    </div>
  )
}
