// mui components
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SuccessAlert = () => {
  return (
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
        onClose={() => {}}
        sx={{ minWidth: '200px' }}
      >
        Email sent!
      </Alert>
    </Stack>
  )
}

export default SuccessAlert