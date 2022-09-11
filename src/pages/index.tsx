import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Headbar from '../components/Headbar'
import {FaCloudDownloadAlt} from "react-icons/fa";
import Footer from '../components/Footer'



const Home: NextPage = () => {
  return (
    <div>
      <Headbar />

      <div className="p-20 flex-col justify-center align-center max-w-screen-md">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 ...">
          Felipe Diniz
        </h1>
        <p className='pt-10'>
         Front-End Developer 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam fugit perferendis molestias autem dolore animi obcaecati nam dolorem saepe? Obcaecati laudantium eligendi voluptatum veritatis! Quod nam ut perferendis perspiciatis.
        </p>
        <br />
       
        
      </div>
      <Footer />
    </div>
   
  )
}

export default Home
