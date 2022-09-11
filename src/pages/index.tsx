import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Headbar from '../components/Headbar'
import Footer from '../components/Footer'
import { ImFolderDownload } from "react-icons/im";



const Home: NextPage = () => {
  return (
    
    
    <div>
      <Headbar />
      <Head>
        <title>Fdiniz.dev</title>
        <meta
          name="description" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Quicksand:wght@300;400&display=swap" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-20 min-flex justify-center ... align">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-pink-500">
          Felipe Diniz
        </h1>
        <p className='text-[1.2rem] pt-10'>
          FullStack Developer | Systems analysis and development. =)
          <br />
          <span className='text-[1.1rem] text-gray-500 pt-10'> Studying daily and perfecting myself to get a professional placement.</span>
        </p>
        <p className='text-[1.1rem] text-gray-500 pt-10'>
       
        </p>      
        <Link href="">
          
          <button className='flex-row justify-center p-[1.2rem] bg-slate-700'>
            <span><ImFolderDownload></ImFolderDownload> Download CV</span>
          </button>
          
        </Link>
        
      </div>
      <Footer />
    </div>
   
  )
}

export default Home
