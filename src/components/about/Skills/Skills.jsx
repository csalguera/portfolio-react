// data
import { skills } from "../../../data/skills"

// components
import Skill from "../Skill/Skill"

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
                  <Skill
                    key={skill.name}
                    skill={skill}
                  />
                ))
            ))}
          </div>
          <div className={styles["back-end"]}>
            <h3>Back End</h3>
            {skills.map(layer => (
              layer.backend.map(skill => (
                <Skill
                  key={skill.name}
                  skill={skill}
                />
              ))
            ))}
          </div>
          <div className={styles["other"]}>
            <h3>Other</h3>
            {skills.map(layer => (
              layer.other.map(skill => (
                <Skill
                  key={skill.name}
                  skill={skill}
                />
              ))
            ))}
          </div>
        </div>
    </>
  )
}

export default Skills