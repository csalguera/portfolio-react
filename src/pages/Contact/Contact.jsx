import { Link } from 'react-router-dom'

function Contact({ contactRef }) {
  return (
    <main className='page-component-container' ref={contactRef}>
      <h1>Contact</h1>
      <p>
        Connect with me via <a href="mailto:carlos.e.salguera@gmail.com">email</a>
      </p>
      <p>Alternatively via:</p>
      <ul>
        <li><Link to="https://www.linkedin.com/in/carlos-salguera/" target="_blank">LinkedIn</Link></li>
        <li><Link to="https://github.com/csalguera" target="_blank">GitHub</Link></li>
      </ul>
      <h1>Resume</h1>
      <p>
        View <a href="/carlos-salguera-resume.pdf" target="_blank">here</a> or download <a href="/carlos-salguera-resume.pdf" download>here.</a>
      </p>
    </main>
  )
}

export default Contact
