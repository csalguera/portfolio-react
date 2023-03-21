// npm packages
import { Link } from "react-router-dom"

// data
import { skills } from "../../../data/skills"

// styles
import styles from './Skills.module.css'

const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
        <div className={styles["skills-container"]}>
          <div className={styles["front-end"]}>
            <h3>Front End</h3>
            {skills.map(layer => (
                layer.frontend.map(skill => (
                  <div className={styles["skill-container"]} key={skill.name}>
                    {skill.name === 'EJS'
                    ?
                    <img src={skill.img} alt="" />
                    :
                    <i className={skill.img}></i>
                    }
                    <Link to={skill.docs} target='_blank' className={styles['docs-link']}>
                      <p>{skill.name}</p>
                    </Link>
                  </div>
                ))
            ))}
          </div>
          <div className={styles["back-end"]}>
            <h3>Back End</h3>
            {skills.map(layer => (
              layer.backend.map(skill => (
                <div className={styles["skill-container"]} key={skill.name}>
                  {skill.name === 'Mongoose'
                  ?
                  <img src={skill.img} alt='' width='30px' />
                  :
                  <i className={skill.img}></i>
                  }
                  <Link to={skill.docs} target='_blank' className={styles['docs-link']}>
                    <p>{skill.name}</p>
                  </Link>
                </div>
              ))
            ))}
          </div>
          <div className={styles.other}>
            <h3>Other</h3>
            {skills.map(layer => (
              layer.other.map(skill => (
                <div className={styles["skill-container"]} key={skill.name}>
                  {skill.name === 'NPM'
                  ?
                  <i className={skill.img}></i>
                  :
                  <img src={skill.img} alt="" />
                  }
                  <Link to={skill.docs} target='_blank' className={styles['docs-link']}>
                    <p>{skill.name}</p>
                  </Link>
                </div>
              ))
            ))}
          </div>
        </div>
    </>
  )
}

export default Skills