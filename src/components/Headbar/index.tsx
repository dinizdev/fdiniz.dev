import Link from "next/link";

export  default function Headbar(){
    return(
        <div className="flex justify-center ... bg-primary p-4">
            <Link href="/">
                <a className="p-4  hover:text-indigo-600">Home</a>
            </Link>
            <Link href="About">
                <a className="p-4  hover:text-indigo-600">About</a>
            </Link>
            <Link href="Links">
                <a className="p-4">Links</a>
            </Link>
            <Link href="Setup">
                <a className="p-4">Setup</a>
            </Link>
            <Link href="HireMe">
                <a className="p-4">Hire me!</a>
            </Link>
            
        </div>
    )
}