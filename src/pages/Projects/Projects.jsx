import './Projects.css'
import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

function Projects({ projectsRef }) {
  return (
    <main className='page-component-container' ref={projectsRef}>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </main>
  )
}

export default Projects
