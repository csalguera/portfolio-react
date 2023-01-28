import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to='/'>Carlos Salguera</Link>
        <ul>
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