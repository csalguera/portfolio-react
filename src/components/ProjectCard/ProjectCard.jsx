// npm modules
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// styles
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    if (clicked) {
      setClicked(false)
      enableBodyScroll(document)
    } else {
      setClicked(true)
      disableBodyScroll(document)
    }
  }

  return (
    <div className={styles["project-card-container"]}>
      <h2>{project.title}</h2>
      <div className={styles["img-container"]}>
        <img src={project.image} alt={project.title} onClick={handleClick} />
        {clicked &&
          <div
            className={styles["enlarged-img-container"]}
            style={clicked ? { backdropFilter: 'brightness(50%)', zIndex: 2 } : { backdropFilter: '100%' } }
            onClick={handleClick}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles["enlarged-img"]}
              style={ clicked ? { zIndex: 1 } : { zIndex: 0 } }
            />
          </div>
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