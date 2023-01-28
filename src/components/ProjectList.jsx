import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const ProjectList = () => {
  return (
    <>
      {projects.map(project =>
        <ul>
          <li>{project.title}</li>
          <li>{project.description}</li>
          <li><img className='projects-img' src={project.image} alt="" /></li>
          <li><Link to={project.repositoryLink}>Repository</Link></li>
          <li><Link to={project.deploymentLink}>Launch App</Link></li>
        </ul>
      )}
    </>
  )
}

export default ProjectList