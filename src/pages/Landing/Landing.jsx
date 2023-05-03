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
    <main id='landing' className='page-component-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* <div className={styles["landing-details"]}>
        <div className={styles.container}>
          <h1>Carlos Salguera</h1>
          <h2>Fullstack Developer</h2>
          <img className={styles['landing-img']} src="https://i.imgur.com/Rd1RywH.jpg" alt="" />
          <h3>TypeScript | PERN | MERN | JavaScript | CSS</h3>
        </div>
      </div> */}

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
