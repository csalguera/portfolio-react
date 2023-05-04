// data
import { projects } from '../../data/projects'

// components
import ProjectCard from '../../components/ProjectCard/ProjectCard'

// mui components
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Projects(props) {
  const {
    fontColor1,
    fontColor2,
  } = props

  return (
    <main id="projects" className='page-component-container'>
      <Typography variant="h2" sx={{ color: fontColor1 }}>
        Projects
      </Typography>
      <Box
        sx={{
          pt: '5vh',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            project={project}
            fontColor2={fontColor2}
          />
        ))}
      </Box>
    </main>
  )
}

export default Projects
