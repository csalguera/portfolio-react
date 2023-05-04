// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Goal = (props) => {
  const {
    fontColor1,
  } = props
  
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ color: fontColor1, pt: '5vh' }}>
        Goal
      </Typography>
      <Typography sx={{ color: fontColor1, pt: 2 }}>
      Software Engineer focused on <b>Full Stack</b> Development
      </Typography>
      <Typography sx={{ color: fontColor1, pt: 2 }}>
      Currently seeking <b>full-time</b> opportunity in <b>Indianapolis, IN</b> or <b>Remote</b>
      </Typography>
      <Typography sx={{ color: fontColor1, pt: 2 }}>
      Recently graduated from a <b>full-time, 480+ hour, 12-week Software Engineering Immersive</b> at General Assembly
      </Typography>
      <Typography sx={{ color: fontColor1, pt: 2 }}>
      Previous work background ingrained a <b>strong work ethic</b> and established <b>discipline</b>
      </Typography>
      <Typography sx={{ color: fontColor1, pt: 2 }}>
      Studied Electrical Engineering at IvyTech Community College
      </Typography>
      <Typography sx={{ color: fontColor1, pt: 2 }}>
        Education paved the way to develop <b>problem-solving skills</b>
      </Typography>
    </Box>
  )
}

export default Goal