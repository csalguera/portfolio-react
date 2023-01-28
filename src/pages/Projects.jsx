import '../styles/projects.css'
import { projects } from '../data/projects'
import ProjectList from '../components/ProjectList'

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects}/>
    </>
  )
}

export default Projects
