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
        <div className={styles["frontend"]}>
          <h3>Frontend</h3>
          {skills.map(tech => (
              tech.frontend.map(skill => (
                <Skill
                  key={skill.name}
                  skill={skill}
                />
              ))
          ))}
        </div>
        <div className={styles["backend"]}>
          <h3>Backend</h3>
          {skills.map(tech => (
            tech.backend.map(skill => (
              <Skill
                key={skill.name}
                skill={skill}
              />
            ))
          ))}
        </div>
        <div className={styles["other"]}>
          <h3>Other</h3>
          {skills.map(tech => (
            tech.other.map(skill => (
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