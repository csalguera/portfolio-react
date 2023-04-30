// data
import { projects } from '../../data/projects'

// components
import ProjectCard from '../../components/ProjectCard/ProjectCard'

function Projects({ projectsRef }) {
  return (
    <main id="projects" className='page-component-container' ref={projectsRef}>
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
