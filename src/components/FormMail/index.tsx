import { useState } from 'react'
import toast from 'react-hot-toast'

import { sendContactMail } from '../../pages/services/sendMail'

export default function FormMail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: any) {
    event.preventDefault()
    console.log(name, email, message)
    if (!name || !email || !message) {
      toast.error('Preencha todos os campos da mensagem!!!', {
        style: {
          background: 'red',
          color: 'white',
        },
      })
      return
    }
    try {
      await sendContactMail(name, email, message)
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      toast('deu erro', {
        style: {
          background: 'red',
          color: 'white',
        },
      })
    }
  }
  return (
    <div className=" flex flex-row items-center justify-center p-8">
      <form className="w-full max-w-lg">
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#8f9ba8]"
              htmlFor="grid-password"
            >
              Nome
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 delay-300 ease-in focus:border-gray-500 focus:bg-white focus:outline-none focus:outline-green-300 focus:transition"
              id="nick"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <p className="text-xs italic text-gray-600">Seu nome</p>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#8f9ba8] "
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="mb-3 block w-full appearance-none  rounded border-2 border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none focus:outline-green-300"
              id="email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <p className="text-xs italic text-gray-600">email@email.com</p>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#8f9ba8] "
              htmlFor="grid-password"
            >
              Mensagem
            </label>
            <textarea
              className=" no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:outline-green-300"
              id="message"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
            <p className="text-xs italic text-gray-600">Sua mensagem</p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="focus:shadow-outline rounded bg-green-500 py-2 px-[10px] font-bold text-white shadow hover:bg-green-600 focus:outline-none md:px-[230px]"
              type="submit"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  )
}
