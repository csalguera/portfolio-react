import { projects } from "../data/projects"

const ProjectDetails = () => {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img className="projects-img" src={projects[0].image} alt="" />
      <article>
        <a href={projects[0].repositoryLink} target="_blank" rel="noreferrer">
          <button>View Repository</button>
        </a>
        <a href={projects[0].deploymentLink} target="_blank" rel="noreferrer">
          <button>View Deployed App</button>
        </a>
      </article>
    </>
  )
}

export default ProjectDetails
