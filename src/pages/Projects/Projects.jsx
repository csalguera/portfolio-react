// data
import { projects } from '../../data/projects'

// components
import ProjectCard from '../../components/ProjectCard/ProjectCard'

// mui components
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Projects() {
  return (
    <main id="projects" className='page-component-container'>
      <Typography variant="h2">
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
          />
        ))}
      </Box>
    </main>
  )
}

export default Projects
