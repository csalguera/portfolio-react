import { Link } from 'react-router-dom'
import ProjectPreview from './ProjectPreview'

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map(project =>
        <ul>
          <li><ProjectPreview project={project}/></li>
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