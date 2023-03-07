import styles from './Nav.module.css'
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation()

  return (
    <>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link
              to='/'
              className={location.pathname === '/' ? styles.active : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/projects'
              className={location.pathname === '/projects' ? styles.active : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className={location.pathname === '/about' ? styles.active : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/resume'
              className={location.pathname === '/resume' ? styles.active : ''}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={location.pathname === '/contact' ? styles.active : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
