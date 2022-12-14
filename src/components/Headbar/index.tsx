import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Headbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <motion.div>
      <nav className="w-full bg-[#08070b] shadow">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5">
              <Link href="/">
                <h2 className="cursor-pointer bg-gradient-to-r from-green-600 via-green-400 to-indigo-500 bg-clip-text text-[1.2rem] font-bold uppercase text-transparent ">
                  FDiniz.dev
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="`items-center·justify-center·space-y-8·text-sm` space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="transition ease-in-out">
                  <Link href="sobre">
                    <a className="text-zinc-400 transition delay-100 ease-in-out hover:text-emerald-400 focus:text-emerald-400  ">
                      Sobre
                    </a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="links">
                    <a className="text-zinc-400 hover:text-emerald-400 focus:text-emerald-400 ">
                      Setup
                    </a>
                  </Link>
                </li>
                <li className="text-white focus:text-emerald-400">
                  <Link href="projetos">
                    <a className="text-zinc-400 hover:text-emerald-400 focus:text-emerald-400 ">
                      Projetos
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  )
}
