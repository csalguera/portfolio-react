import './Projects.css'
import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
// import ProjectList from '../../components/ProjectList'

function Projects() {
  return (
    <main className='page-component-container'>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </main>
  )
}

export default Projects
