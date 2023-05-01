// components
import Goal from '../../components/about/Goal/Goal'
import Skills from '../../components/about/Skills/Skills'
import Journey from '../../components/about/Journey/Journey'

// styles
import styles from './About.module.css'

function About() {
  return (
    <main id='about' className='page-component-container'>
      <h1>About</h1>
      <div className={`${styles["about-container"]} ${styles["goal-container"]}`}>
        <Goal />
      </div>
      <div className={styles["about-container"]}>
        <Skills />
      </div>
      <div className={styles["about-container"]}>
        <Journey />
      </div>
    </main>
  )
}

export default About
