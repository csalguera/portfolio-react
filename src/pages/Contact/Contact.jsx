import styles from './Contact.module.css'
import { Link } from 'react-router-dom'

function Contact({ contactRef }) {
  return (
    <main className='page-component-container' ref={contactRef}>
      <h1>Contact</h1>
      <p>
        {'Connect with me via '}
        <Link
        to=''
        onClick={() => window.location = 'mailto:carlos.e.salguera@gmail.com'}
        className={styles["link-tag"]}
        >
          email
        </Link>
      </p>
      <p>Alternatively via:</p>
      <Link
        to="https://www.linkedin.com/in/carlos-salguera/"
        target="_blank"
        className={styles["link-tag"]}
      >
        LinkedIn
      </Link>
      <Link
        to="https://github.com/csalguera"
        target="_blank"
        className={styles["link-tag"]}
      >
        GitHub
      </Link>
      <h1>Resume</h1>
      <p>
        {'View '}
        <Link
          to="/carlos-salguera-resume.pdf"
          target="_blank"
          className={styles["link-tag"]}
        >
          here
        </Link>
        {' or download '}
        <Link
        to="/carlos-salguera-resume.pdf"
        download
        className={styles["link-tag"]}
        >
          here
        </Link>
      </p>
    </main>
  )
}

export default Contact
