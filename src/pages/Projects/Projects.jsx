// npm packages
import { projects } from '../../data/projects'

// components
import ProjectCard from '../../components/ProjectCard/ProjectCard'

// styles
import './Projects.css'

function Projects({ projectsRef }) {
  return (
    <main className='page-component-container' ref={projectsRef}>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectCard
          project={project}
          key={project.title}
        />
      ))}
    </main>
  )
}

export default Projects
