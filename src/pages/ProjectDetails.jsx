import { findProject } from "../utilities/findProject"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  console.log(useParams());
  const url = useParams().projectDetails
  const project = findProject(url)

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img className="projects-img" src={project.image} alt="" />
      <article>
        <a href={project.repositoryLink} target="_blank" rel="noreferrer">
          <button>View Repository</button>
        </a>
        <a href={project.deploymentLink} target="_blank" rel="noreferrer">
          <button>View Deployed App</button>
        </a>
      </article>
    </>
  )
}

export default ProjectDetails
