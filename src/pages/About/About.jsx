// components
import Goal from '../../components/about/Goal/Goal'
import Skills from '../../components/about/Skills/Skills'
import Journey from '../../components/about/Journey/Journey'

// mui components
import { Typography } from '@mui/material'

function About() {
  return (
    <main id='about' className='page-component-container'>
      <Typography variant="h2">
        About
      </Typography>
      <Goal />
      <Skills />
      <Journey />
    </main>
  )
}

export default About
