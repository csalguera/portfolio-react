// mui components
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Zoom from '@mui/material/Zoom';

const SuccessAlert = (props) => {
  const { emailAlert, setEmailAlert } = props

  const handleClose = () => {
    setEmailAlert(!emailAlert)
  }

  return (
    <Zoom in={emailAlert}>
      <Stack
        sx={{
          mt: '4vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          pb: 1,
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