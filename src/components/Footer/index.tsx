import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
export default function Footer() {
  return (
    <div>
      <p className="mt-48  text-center">Feito com amor por Felipe Diniz 💚️</p>
      <section className=" align-center bg-dark-400  flex justify-center gap-5  p-4 text-sm text-white">
        <div className="flex gap-6 ">
          <a
            className="flex  gap-3"
            target="_blank"
            href="https://www.instagram.com/dinizdev/"
            rel="noreferrer"
          >
            <BsInstagram />
            <span>Instagram</span>
          </a>
          <a
            className="flex gap-3"
            href="https://github.com/dinizdev"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
            <span>Github</span>
          </a>
          <a
            className="flex  gap-3"
            href="https://www.linkedin.com/in/lipe-diniz/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
            <span> Linkedin</span>
          </a>
        </div>
      </section>
    </div>
  )
}
