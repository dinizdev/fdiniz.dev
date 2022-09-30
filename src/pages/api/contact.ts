import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'

const email = process.env.MAILADRESS

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  }),
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { senderMail, name, recipientMail } = req.body

    if (!senderMail.trim() || !name.trim() || !recipientMail.trim()) {
      return res.status(403).send('')
    }

    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>Email:</b> ${senderMail}<br /><b>Mensagem:</b> ${recipientMail}</p>`,
      replyTo: senderMail,
    }

    await transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log('message sent', info)
      }
    })

    return res.send('')
  } catch (err) {
    return res.json({
      error: true,
      message: err.message,
    })
  }
}
