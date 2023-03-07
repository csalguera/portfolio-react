import styles from './Nav.module.css'
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const {
    scrollToRef,
    landingRef,
    projectsRef,
    aboutRef,
    resumeRef,
    contactRef,
  } = props
  const location = useLocation()

  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <button onClick={() => scrollToRef(landingRef)} className={styles['nav-button']}>
            CS
          </button>
          <button onClick={() => scrollToRef(projectsRef)} className={styles['nav-button']}>
            Projects
          </button>
          <button onClick={() => scrollToRef(aboutRef)} className={styles['nav-button']}>
            About
          </button>
          <button onClick={() => scrollToRef(resumeRef)} className={styles['nav-button']}>
            Resume
          </button>
          <button onClick={() => scrollToRef(contactRef)} className={styles['nav-button']}>
            Contact
          </button>
        </div>
      </nav>
    </>
  )
}

export default Nav
