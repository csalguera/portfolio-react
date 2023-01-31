import { Link } from "react-router-dom"
import { hyphenateWords } from "../utilities/hyphenateWords"

const ProjectPreview = ({ project }) => {
  return (
    <>
      <div>
        <img className="projects-img" src={project.image} alt={project.title} />
        <section>
          <h3>
            {project.title}
          </h3>
          <Link to={`/projects/${hyphenateWords(project.title)}`}>
            <button>
              Learn more
            </button>
          </Link>
        </section>
      </div>
    </>
  )
}

export default ProjectPreview
