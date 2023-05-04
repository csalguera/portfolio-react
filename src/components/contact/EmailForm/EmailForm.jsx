// npm modules
import { useState } from "react"
import { send } from 'emailjs-com'

const REACT_APP_EMAILJS_PUBLIC_KEY = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
const REACT_APP_EMAILJS_SERVICE_ID = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`
const REACT_APP_EMAILJS_TEMPLATE_ID = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`

const EmailForm = () => {
  const [toSend, setToSend] = useState({
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send(
      REACT_APP_EMAILJS_SERVICE_ID,
      REACT_APP_EMAILJS_TEMPLATE_ID,
      toSend,
      REACT_APP_EMAILJS_PUBLIC_KEY,
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
    })
    .catch((err) => {
      console.log('FAILED...', err)
    })
    setToSend({
      subject: '',
      message: '',
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='subject'
        placeholder='Subject'
        value={toSend.subject}
        onChange={handleChange}
      />
      <input
        type='text'
        name='message'
        placeholder='Message'
        value={toSend.message}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default EmailForm