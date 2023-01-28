import { Link } from 'react-router-dom'
import ProjectPreview from './ProjectPreview'

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map(project =>
        <ul>
          <ProjectPreview project={project}/>
          <li>{project.description}</li>
          <li><Link to={project.repositoryLink}>Repository</Link></li>
          <li><Link to={project.deploymentLink}>Launch App</Link></li>
        </ul>
      )}
    </>
  )
}

export default ProjectList
