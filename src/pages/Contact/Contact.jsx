// npm modules
import { send } from 'emailjs-com'
import { useState } from 'react'

// mui components
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const REACT_APP_EMAILJS_PUBLIC_KEY = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
const REACT_APP_EMAILJS_SERVICE_ID = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`
const REACT_APP_EMAILJS_TEMPLATE_ID = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`

function Contact(props) {
  const {
    fontColor1,
  } = props

  const [toSend, setToSend] = useState({
    subject: '',
    message: '',
  })

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

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  return (
    <main id='contact' className='page-component-container'>
      <Typography variant="h2" sx={{ color: fontColor1 }}>
        Contact
      </Typography>
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
    </main>
  )
}

export default Contact
