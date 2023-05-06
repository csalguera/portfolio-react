// mui components
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Zoom from '@mui/material/Zoom';

const SuccessAlert = (props) => {
  const { emailSent, setEmailSent } = props

  const handleClose = () => {
    setEmailSent(!emailSent)
  }

  return (
    <Zoom in={emailSent}>
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
    </Zoom>
  )
}

export default SuccessAlert