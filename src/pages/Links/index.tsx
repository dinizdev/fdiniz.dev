import Headbar from "../../components/Headbar";
import Head from "next/head";
import axios from "axios";
import { url } from "inspector";

export default function Links(){

    return (
        <div>
            <Headbar/>

            <Head>
            <title>Teste rota 2</title>
            <meta
            name="description"
            content=""
            />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="p-20 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
                Links
            </h1> 
            <div className="flex min-flex justify-center">
            <button className='font-bold px-16 flex-row justify-center p-[1.2rem] bg-slate-700'>
                Fetch Links
            </button>
            
            </div>
        </div>
    )
}