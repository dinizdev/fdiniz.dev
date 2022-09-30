import axios from 'axios'

export const sendContactMail = async (
  name: string,
  senderMail: string,
  recipientMail: string,
) => {
  const data = {
    name,
    senderMail,
    recipientMail,
  }
  try {
    return await axios.post('/api/contact', data)
  } catch (error) {
    return error
  }
}
