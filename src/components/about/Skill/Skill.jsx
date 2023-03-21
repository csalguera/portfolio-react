// npm packages
import { Link } from "react-router-dom"

// styles
import styles from './Skill.module.css'

const Skill = ({ skill }) => {
  return (
    <div className={styles["skill-container"]} key={skill.name}>
      {skill.devIcon
      ?
      <i className={skill.devIcon}></i>
      :
      <img src={skill.img} alt="" />
      }
      <Link to={skill.docs} target='_blank' className={styles['docs-link']}>
        <p>{skill.name}</p>
      </Link>
    </div>
  )
}

export default Skill