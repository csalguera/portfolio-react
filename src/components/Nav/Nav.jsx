// styles
import styles from './Nav.module.css'

const Nav = (props) => {
  const {
    scrollToRef,
    landingRef,
    projectsRef,
    aboutRef,
    contactRef,
    handleUrlChange,
    url,
  } = props

  function handleClick(evt) {
    if (evt.target.textContent === 'CS') {
      scrollToRef(landingRef)
      handleUrlChange('/')
    } else if (evt.target.textContent === 'Projects') {
      scrollToRef(projectsRef)
      handleUrlChange('/projects')
    } else if (evt.target.textContent === 'About') {
      scrollToRef(aboutRef)
      handleUrlChange('/about')
    } else if (evt.target.textContent === 'Contact') {
      scrollToRef(contactRef)
      handleUrlChange('/contact')
    }
  }

  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <button
            onClick={handleClick}
            className={`${styles['nav-button']} ${url === '/' ? styles.active : ''} ${styles.logo}`}
            style={{fontFamily: 'Pacifico'}}
          >
            CS
          </button>
          <button
            onClick={handleClick}
            className={`${styles['nav-button']} ${url === '/projects' ? styles.active : ''}`}
          >
            Projects
          </button>
          <button
            onClick={handleClick}
            className={`${styles['nav-button']} ${url === '/about' ? styles.active : ''}`}
          >
            About
          </button>
          <button
            onClick={handleClick}
            className={`${styles['nav-button']} ${url === '/contact' ? styles.active : ''}`}
          >
            Contact
          </button>
        </div>
      </nav>
    </>
  )
}

export default Nav
