// npm modules
import { useState } from "react"
import { send } from 'emailjs-com'

// mui components
import FormControl from "@mui/material/FormControl";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


// environment variables
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
      subject: '',
      message: '',
    })
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', minWidth: '600px', marginTop: '5vh' }}
    >
      <TextField
        id="outlined-basic"
        name="subject"
        label="Subject"
        value={toSend.subject}
        variant="outlined"
        focused
        inputProps={{ style: { color: 'white' } }}
        onChange={handleChange}
        sx={{ mb: 2 }}
        />
      <TextField
        id="outlined-multiline-static"
        name="message"
        label="Message"
        value={toSend.message}
        multiline
        rows={4}
        focused
        inputProps={{ style: { color: 'white' } }}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
        <Button type="submit" variant="outlined">Submit</Button>
      </Stack>
    </form>
  )
}

export default EmailForm