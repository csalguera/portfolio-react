// npm packages
import { Link } from 'react-router-dom'

// data
import { skills } from '../../data/skills'

// styles
import styles from './About.module.css'

function About({ aboutRef }) {
  return (
    <main className='page-component-container' style={{backgroundColor: '#bababa'}} ref={aboutRef}>
      <h1>About</h1>
      <div className={`${styles["about-container"]} ${styles["goal-container"]}`}>
        <h2>Goal</h2>
        <p>Software Engineer focused on <b>Full Stack Development</b></p>
        <p>Currently <b>seeking full-time</b> opportunity in <b>Indianapolis, IN</b></p>
        <p>Recently graduated from a <b>full-time, 480+ hour, 12-week Software Engineering Immersive</b> at General Assembly</p> 
        <p>Previous work background ingrained a <b>strong work ethic</b> and established <b>discipline</b></p>
        <p>Studied Electrical Engineering at IvyTech Community College</p>
        <p>Education paved the way to develop <b>problem-solving skills</b></p>
      </div>
      <div className={styles["about-container"]}>
        <h2>Skills</h2>
        <div className={styles["skills-container"]}>
          <div className={styles["front-end"]}>
            <h3>Front End</h3>
            {skills.map(layer => (
                layer.frontend.map(skill => (
                  <div className={styles["skill-container"]} key={skill.name}>
                    <i className={skill.img}></i>
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
                  <img src={skill.img} alt="" />
                  <Link to={skill.docs} target='_blank' className={styles['docs-link']}>
                    <p>{skill.name}</p>
                  </Link>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
      <div className={styles["about-container"]}>
        <h2>Journey</h2>
        <p className={styles["journey-text"]}>I have always been fascinated by the STEM fields since I was a kid, excelling in mathematics and physics. Contrary to my inclination, I spent my adulthood working in the food industry. Throughout 2018 until the end of 2019 I attended IvyTech to study Electrical Engineering. Due to unforeseen circumstances, I put my education on hold to focus on my career. I received multiple promotions but ultimately concluded that I was not satisfied. In November of 2022, I made the decision to pursue Software Engineering. I graduated from General Assembly in March of 2023 and now seek a full-time opportunity to showcase what I have learned.</p>
      </div>
    </main>
  )
}

export default About
