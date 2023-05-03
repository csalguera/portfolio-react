// data
import { projects } from '../../data/projects'

// components
import ProjectCard from '../../components/ProjectCard/ProjectCard'

// mui components
import Typography from '@mui/material/Typography'

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
      {projects.map(project => (
        <ProjectCard
          key={project.title}
          project={project}
          fontColor2={fontColor2}
        />
      ))}
    </main>
  )
}

export default Projects
