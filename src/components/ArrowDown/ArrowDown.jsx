// mui components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';

const ArrowDown = (props) => {
  const {
    id,
    arrowColor,
    scrollToElement,
  } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pt: 8 }}>
      <IconButton
        color="primary"
        aria-label="scroll down"
        component="label"
        onClick={() => scrollToElement(id)}
      >
        <ArrowCircleDownSharpIcon fontSize='large' sx={{ color: arrowColor }} />
      </IconButton>
    </Box>
  )
}

export default ArrowDown