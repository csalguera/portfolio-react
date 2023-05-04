// components
import Goal from '../../components/about/Goal/Goal'
import Skills from '../../components/about/Skills/Skills'
import Journey from '../../components/about/Journey/Journey'

// mui components
import { Typography } from '@mui/material'

function About(props) {
  const {
    fontColor1,
    fontColor2,
  } = props

  return (
    <main id='about' className='page-component-container'>
      <Typography variant="h2" sx={{ color: fontColor1 }}>
        About
      </Typography>
      <Goal
        fontColor1={fontColor1}
      />
      <Skills
        fontColor1={fontColor1}
        fontColor2={fontColor2}
      />
      <Journey
        fontColor1={fontColor1}
      />
    </main>
  )
}

export default About
