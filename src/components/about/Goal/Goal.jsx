// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Goal = () => {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: '800px' }}>
      <Typography variant="h4" sx={{ pt: '5vh' }}>
        Goal
      </Typography>
      <Typography sx={{ pt: 2, px: 8 }}>
        Software Engineer focused on <b>Full Stack</b> Development
      </Typography>
      <Typography sx={{ pt: 2, px: 8 }}>
        Currently seeking <b>full-time</b> opportunity in <b>Indianapolis, IN</b> or <b>Remote</b>
      </Typography>
      <Typography sx={{ pt: 2, px: 8 }}>
        Recently graduated from a <b>full-time, 480+ hour, 12-week Software Engineering Immersive</b> at General Assembly
      </Typography>
      <Typography sx={{ pt: 2, px: 8 }}>
        Previous work background ingrained a <b>strong work ethic</b> and established <b>discipline</b>
      </Typography>
      <Typography sx={{ pt: 2, px: 8 }}>
        Studied Electrical Engineering at IvyTech Community College
      </Typography>
      <Typography sx={{ pt: 2, px: 8 }}>
        Education paved the way to develop <b>problem-solving skills</b>
      </Typography>
    </Box>
  )
}

export default Goal