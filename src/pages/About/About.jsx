// components
import Goal from '../../components/about/Goal/Goal'
import Skills from '../../components/about/Skills/Skills'
import Journey from '../../components/about/Journey/Journey'

// styles
// import styles from './About.module.css'

// mui components
import { Typography } from '@mui/material'

function About(props) {
  const {
    fontColor1,
  } = props

  return (
    <main id='about' className='page-component-container'>
      {/* <h1>About</h1>
      <div className={`${styles["about-container"]} ${styles["goal-container"]}`}>
        <Goal />
      </div>
      <div className={styles["about-container"]}>
        <Skills />
      </div>
      <div className={styles["about-container"]}>
        <Journey />
      </div> */}
      <Typography variant="h2" sx={{ color: fontColor1 }}>
        About
      </Typography>
      <Goal
        fontColor1={fontColor1}
      />
      <Skills
        fontColor1={fontColor1}
      />
    </main>
  )
}

export default About
