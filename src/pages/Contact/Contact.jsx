// npm modules
import { useState } from 'react';

// components
import EmailForm from '../../components/contact/EmailForm/EmailForm'
import Icons from '../../components/contact/Icons/Icons';
import SuccessAlert from '../../components/contact/SuccessAlert/SuccessAlert';

// mui components
import Typography from '@mui/material/Typography'

function Contact() {
  const [emailSent, setEmailSent] = useState(false)

  return (
    <main id='contact' className='page-component-container'>
      <Typography variant="h2">
        Contact
      </Typography>
      <img
        src='https://i.imgur.com/Rd1RywH.jpg'
        alt=''
        style={{
          width: '250px',
          height: '250px',
          objectFit: 'cover',
          borderRadius: '50%',
          marginTop: '5vh',
        }}
      />
      <EmailForm
        setEmailSent={setEmailSent}
      />
      <SuccessAlert
        emailSent={emailSent}
        setEmailSent={setEmailSent}
      />
      <Icons />
    </main>
  )
}

export default Contact
