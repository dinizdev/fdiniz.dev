import { useEffect, useState } from 'react'

type Repository = {
  name: string
  description: string
  html_url: string
  language: string
}

export default function Repos() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/dinizdev/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data)
      })
  }, [])

  return (
    <ul className="p-5 md:p-5">
      {repositories.map((repo) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col gap-5 border-solid border-y-sky-800 p-5 ">
            <li
              className=" border-l-8 border-solid border-purple-500 p-2 text-2xl font-medium"
              key={repo.name}
            >
              {repo.name}
            </li>
            <p
              className="text-sm italic text-zinc-400  md:max-w-lg md:text-[1rem]"
              key={repo.description}
            >
              {repo.description}
            </p>
            <p
              className="w-64 list-disc bg-emerald-900 p-1 text-[.7rem] font-bold transition-all delay-100 ease-in-out hover:bg-zinc-500"
              key={repo.language}
            >
              Linguagem utilizada: {repo.language}
            </p>
            <a
              className="text-sm font-bold normal-case text-white underline underline-offset-8"
              href={repo.html_url}
            >
              Saiba mais...
            </a>
            <br />
          </div>
        )
      })}
    </ul>
  )
}
