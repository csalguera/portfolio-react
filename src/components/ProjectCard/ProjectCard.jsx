import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className={styles["project-card-container"]}>
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <div className={styles["technologies-container"]}>
        {project.technologies?.map((technology, idx) => (
          <div key={technology} className={styles["technology-content"]}>
            <p>{technology}</p>
            {idx !== project.technologies?.length - 1
            ?
            <p style={{margin: '0 4px'}}>|</p>
            :
            ''
            }
          </div>
        ))}
      </div>
      <p>{project.description}</p>
      <div className={styles["links-container"]}>
        <Link
          to={project.repositoryLink}
          target='_blank'
        >
          GitHub
        </Link>
        <Link
          to={project.deploymentLink}
          target='_blank'
        >
          App
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard