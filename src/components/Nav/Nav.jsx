import styles from './Nav.module.css'
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
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
          <Link
            to='/projects'
            className={location.pathname === '/projects' ? styles.active : ''}
          >
            Projects
          </Link>
          <Link
            to='/about'
            className={location.pathname === '/about' ? styles.active : ''}
          >
            About
          </Link>
          <Link
            to='/resume'
            className={location.pathname === '/resume' ? styles.active : ''}
          >
            Resume
          </Link>
          <Link
            to='/contact'
            className={location.pathname === '/contact' ? styles.active : ''}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
