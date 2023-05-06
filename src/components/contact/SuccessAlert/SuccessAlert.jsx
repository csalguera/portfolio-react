// npm modules
import { useEffect, useState } from 'react';

// mui components
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SuccessAlert = (props) => {
  const { emailSent, setEmailSent } = props
  const [displayAlert, setDisplayAlert] = useState(false)

  const handleClose = () => {
    setDisplayAlert(false)
    setEmailSent(false)
  }

  useEffect(() => {
    if (emailSent) {
      setDisplayAlert(true)
    }
  }, [emailSent])

  return (
    <>
      {displayAlert &&
      <Stack
        sx={{
          mt: '4vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
        spacing={2}
      >
        <Alert
          onClose={handleClose}
          sx={{ minWidth: '200px' }}
          variant='filled'
          color='primary'
        >
          Email sent!
        </Alert>
      </Stack>
      }
    </>
  )
}

export default SuccessAlert