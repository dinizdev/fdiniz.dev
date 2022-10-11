import nodemailer from 'nodemailer'

const email = process.env.MAILADRESS
const emailPass = process.env.MAILPASS

const transporter = nodemailer.createTransport({
  host: 'imap.gmail.com',
  port: 993,
  auth: {
    user: email,
    pass: emailPass,
  },
})

export default async (req: any, res: any) => {
  const { senderMail, name, content } = req.body

  if (!senderMail || !name || !content) {
    res.status(403).send()
    return
  }

  const mailerRes = await mailer({ senderMail, name, text: content })
  res.send(mailerRes)
}

const mailer = ({
  senderMail,
  name,
  text,
}: {
  senderMail: any
  name: any
  text: any
}) => {
  const from =
    name && senderMail ? `${name} <?{senderMail}>` : `${name || senderMail}`
  const message = {
    from,
    to: `${email}`,
    subject: `nova mensagem de contato - ${name}`,
    text,
    replyTo: '',
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    })
  })
}
