import Head from 'next/head';
import Headbar from '../../components/Headbar';


export default function About() {
  return (
    <div>
        <Headbar/>
        <Head>
            <title>Teste rota 1</title>
            <meta
            name="description"
            content=""
            />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
        
        <h1 className="p-20 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
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
  );
}
