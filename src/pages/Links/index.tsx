import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Headbar from '../../components/Headbar'

export const getStaticProps: GetStaticProps = async () => {
  const url = 'https://api.github.com/users/dinizdev'
  const data = await axios.get(url)
  return {
    props: {
      users: [
        {
          ...data.data,
        },
      ],
    },
  }
}

export default function Links(props: any) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    if (props.users) {
      setUsers(props.users)
      console.log(props.users)
    }
  }, [props.users])

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
        <ul className="col-start-2 text-2xl">
          {users.map((users: any) => (
            <p key={users.name}>{users.name}</p>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}
