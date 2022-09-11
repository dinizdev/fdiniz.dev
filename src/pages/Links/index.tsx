import Headbar from "../../components/Headbar";
import Head from "next/head";

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
            <h1 className="p-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 ...">
                Soon =)
            </h1>
        </div>
    )
}