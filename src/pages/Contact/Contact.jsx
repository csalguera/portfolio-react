// components
import EmailForm from '../../components/contact/EmailForm/EmailForm'

// mui components
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Contact(props) {
  const {
    fontColor1,
  } = props

  return (
    <main id='contact' className='page-component-container'>
      <Typography variant="h2" sx={{ color: fontColor1 }}>
        Contact
      </Typography>
      <EmailForm />
    </main>
  )
}

export default Contact
