import Headbar from "../../components/Headbar";
import Head from "next/head";

export default function Projects(){
    return (
        <div>
            <Headbar/>

            <Head>
                <title>Teste rota 3</title>
                <meta
                name="description"
                content=""
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="p-20 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
                Projects
            </h1>
        </div>
    )
}