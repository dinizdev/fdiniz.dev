export default function FormMail() {
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
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="nick"
              type="text"
            />
            <p className="text-xs italic text-gray-600">Seu nome</p>
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
              className=" no-re size mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="message"
            ></textarea>
            <p className="text-xs italic text-gray-600">Sua mensagem</p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="focus:shadow-outline rounded bg-green-500 py-2 px-[140px] font-bold text-white shadow hover:bg-green-600 focus:outline-none md:px-[230px]"
              type="submit"
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
