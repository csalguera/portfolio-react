import { Link } from 'react-router-dom'
import { useState } from 'react';

import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false)

  function handleHover() {
    hovered
    ?
    setHovered(false)
    :
    setHovered(true)
  }

  return (
    <div className={styles["project-card-container"]}>
      <h2>{project.title}</h2>
      <div className={styles["img-container"]}>
        <img src={project.image} alt={project.title} onMouseEnter={handleHover} />
        {hovered &&
          <img
            src={project.image}
            alt={project.title}
            onMouseLeave={handleHover}
            className={styles["enlarged-img"]}
            style={ hovered ? { zIndex: 1 } : { zIndex: 0 } }
          />
        }
      </div>
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
          className={styles["link-tag"]}
        >
          GitHub
        </Link>
        <Link
          to={project.deploymentLink}
          target='_blank'
          className={styles["link-tag"]}
        >
          App
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard