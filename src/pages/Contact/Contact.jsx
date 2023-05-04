// npm modules
import { useState } from 'react';

// components
import EmailForm from '../../components/contact/EmailForm/EmailForm'
import Icons from '../../components/contact/Icons/Icons';

// mui components
import Typography from '@mui/material/Typography'

function Contact(props) {
  const {
    fontColor1,
  } = props

  return (
    <main id='contact' className='page-component-container'>
      <Typography variant="h2" sx={{ color: fontColor1 }}>
        Contact
      </Typography>
      <img
        src='https://i.imgur.com/Rd1RywH.jpg'
        alt=''
        style={{
          maxWidth: '300px',
          maxHeight: '300px',
          objectFit: 'cover',
          borderRadius: '50%',
          marginTop: '5vh',
        }}
      />
      <EmailForm
        fontColor1={fontColor1}
      />
      <Icons
        fontColor1={fontColor1}
      />
    </main>
  )
}

export default Contact
