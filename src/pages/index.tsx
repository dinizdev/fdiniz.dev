import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Headbar from '../components/Headbar'
import Footer from '../components/Footer'
import { ImFolderDownload } from "react-icons/im";
import { motion } from "framer-motion"


const Home: NextPage = () => {
  return (
    <div>
      
      <Headbar />
      <Head>
        <title>Felipe Diniz</title>
        <meta
          name="description" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Quicksand:wght@300;400&display=swap" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <motion.h1 className="p-20 text-left text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        Felipe Diniz
      </motion.h1>
      
      <div className="p-28  justify-center align">
      
        <p className='text-[1.2rem] pt-10'>
          FullStack Developer | Systems analysis and development. =)
          <br />
          <span className='text-[1.1rem] text-gray-500 pt-10'> Studying daily and perfecting myself to get a professional placement.</span>
        </p>
        <p className='text-[1.1rem] text-gray-500 pt-10'>
       
        </p>      
        <Link href="">
          <button className='leading-tight flex justify-center items-center gap-3 px-6  p-4 bg-slate-700'>
            <ImFolderDownload className='mb-1'/> <span className='flex items-center h-full align-middle leading'>DOWNLOAD CV</span>
          
          </button>
          
        </Link>

        
        
      </div>
      <div className="p-20 flex min-flex justify-center">
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eveniet reiciendis tempora architecto nulla maiores obcaecati reprehenderit pariatur ab voluptas dolor, eos deserunt cupiditate corrupti similique natus unde aperiam. Corporis.</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad autem cum sed, reprehenderit deleniti neque velit recusandae repellat voluptates veritatis odio voluptatem culpa officiis repellendus laboriosam ullam doloribus facere consequatur.</div>
      </div>
      <div className='flex flex-col'>
        <Footer />
      </div>
    </div>
   
  )
}

export default Home
