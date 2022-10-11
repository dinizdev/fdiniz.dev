import axios from 'axios'

export const sendContactMail = async (
  name: any,
  senderMail: any,
  content: any,
) => {
  const data = {
    name,
    senderMail,
    content,
  }
  try {
    return await axios.post('/api/contact', data)
  } catch (error) {
    return error
  }
}
