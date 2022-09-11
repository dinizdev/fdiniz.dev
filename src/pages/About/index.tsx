import Headbar from "../../components/Headbar";

export default function About(){
    return (
        <div>
            <Headbar/>
            <h1 className="p-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 ...">
                About
            </h1>
        </div>
    )
}