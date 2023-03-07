import styles from './Nav.module.css'
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const {
    scrollToRef,
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
          <Link
            to='/'
            className={location.pathname === '/' ? styles.active : ''}
          >
            Home
          </Link>
          <button onClick={() => scrollToRef(projectsRef)}>
            Projects
          </button>
          <button onClick={() => scrollToRef(aboutRef)}>
            About
          </button>
          <button onClick={() => scrollToRef(resumeRef)}>
            Resume
          </button>
          <button onClick={() => scrollToRef(contactRef)}>
            Contact
          </button>
        </div>
      </nav>
    </>
  )
}

export default Nav
