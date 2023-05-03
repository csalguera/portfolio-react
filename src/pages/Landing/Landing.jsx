// styles
// import styles from './Landing.module.css'

// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function Landing(props) {
  const {
    fontColor,
  } = props

  return (
    <main
      id='landing'
      className='page-component-container'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ maxWidth: '700px', textAlign: 'center' }}>
        <Typography variant="h1" sx={{ color: fontColor }}>
          Carlos Salguera
        </Typography>
        <Typography variant="h5" sx={{ color: 'red', py: 1 }}>
          FULL STACK DEVELOPER
        </Typography>
        <Typography sx={{ color: fontColor, px: 10, py: 1 }}>
          I am a Software Engineer with a focus on React, JavaScript, TypeScript, PostgreSQL, and MongoDB.
        </Typography>
      </Box>
    </main>
  )
}

export default Landing
