import { FormEvent, useState } from 'react'

import { sendContactMail } from '../../pages/services/sendMail'

export default function FormMail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleReset = () => {
    setName('')
    setEmail('')
    setMessage('')
  }
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await sendContactMail(name, email, message)
    alert('Successo, email enviado!!!')
    handleReset()
  }

  return (
    <div className=" flex flex-row items-center justify-center p-8">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#8f9ba8]"
              htmlFor="grid-password"
            >
              Nickname
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="nick"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <p className="text-xs italic text-gray-600">your nickname</p>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#8f9ba8]"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
              Message
            </label>
            <textarea
              className=" no-re size mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="message"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
            <p className="text-xs italic text-gray-600">your message</p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="focus:shadow-outline rounded bg-purple-600 px-36 py-2 font-bold text-white shadow hover:bg-purple-800 focus:outline-none md:px-60"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  )
}
