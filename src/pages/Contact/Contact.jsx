// npm packages
import { Link } from 'react-router-dom'

// styles
import styles from './Contact.module.css'

function Contact() {
  return (
    <main id='contact' className='page-component-container'>
      <h1>Contact</h1>
      <div className={styles["contact-details"]}>
        <div className={styles.email}>
          <img src='/assets/mail-svgrepo-com.svg' alt="" />
          <Link
          to=''
          onClick={() => window.location = 'mailto:carlos.e.salguera@gmail.com'}
          className={styles["link-tag"]}
          >
            carlos.e.salguera@gmail.com
          </Link>
        </div>
        <div className={styles["linked-in"]}>
          <img src="/assets/linkedin-svgrepo-com.svg" alt="" />
          <Link
            to="https://www.linkedin.com/in/carlos-salguera/"
            target="_blank"
            className={styles["link-tag"]}
          >
            LinkedIn
          </Link>
        </div>
        <div className={styles.github}>
          <img src="/assets/github-svgrepo-com.svg" alt="" />
          <Link
            to="https://github.com/csalguera"
            target="_blank"
            className={styles["link-tag"]}
          >
            GitHub
          </Link>
        </div>
        <div className={styles.resume}>
          <img src="/assets/sheet-txt-svgrepo-com.svg" alt="" />
          <p style={{fontWeight: 'bold'}}>
            {'Resume: '}
            <Link
              to="/carlos-salguera-resume.pdf"
              target="_blank"
              className={styles["link-tag"]}
            >
              view
            </Link>
            {' | '}
            <Link
              to="/carlos-salguera-resume.pdf"
              target='_blank'
              download
              className={styles["link-tag"]}
            >
              download
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Contact
