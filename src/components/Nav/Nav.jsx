import styles from './Nav.module.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className={styles.navbar}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
