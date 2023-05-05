// npm modules
import { useState } from "react"
import { send } from 'emailjs-com'

// mui components
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

// environment variables
const REACT_APP_EMAILJS_PUBLIC_KEY = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
const REACT_APP_EMAILJS_SERVICE_ID = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`
const REACT_APP_EMAILJS_TEMPLATE_ID = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`

const EmailForm = () => {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
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
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <>
      <Typography variant="h5" sx={{ mt: 8 }}>
        Email
      </Typography>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '12px'
        }}
      >
        <TextField
          id="outlined-basic"
          name="name"
          label="Full Name"
          value={toSend.name}
          variant="outlined"
          focused
          onChange={handleChange}
          sx={{ mb: 2, width: '50vw', maxWidth: '600px' }}
          />
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          value={toSend.email}
          variant="outlined"
          focused
          onChange={handleChange}
          sx={{ mb: 2, width: '50vw', maxWidth: '600px' }}
          />
        <TextField
          id="outlined-basic"
          name="subject"
          label="Subject"
          value={toSend.subject}
          variant="outlined"
          focused
          onChange={handleChange}
          sx={{ mb: 2, width: '50vw', maxWidth: '600px' }}
          />
        <TextField
          id="outlined-multiline-static"
          name="message"
          label="Message"
          value={toSend.message}
          multiline
          rows={4}
          focused
          onChange={handleChange}
          sx={{ mb: 2, width: '50vw', maxWidth: '600px' }}
        />
        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" variant="outlined">Submit</Button>
        </Stack>
      </form>
    </>
  )
}

export default EmailForm