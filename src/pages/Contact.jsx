import { Link } from 'react-router-dom'
import '../styles/Contact.css'

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        Reach out to me via <a href="mailto:carlos.e.salguera@gmail.com">email</a>
      </p>
      <p>Alternatively via:</p>
      <ul>
        <li><Link to="https://www.linkedin.com/in/carlos-salguera/" target="_blank">LinkedIn</Link></li>
        <li><Link to="https://github.com/csalguera" target="_blank">GitHub</Link></li>
      </ul>
    </>
  )
}

export default Contact
