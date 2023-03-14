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
      handleUrlChange('contact')
    }
  }

  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <button
            onClick={handleClick}
            className={styles['nav-button']}
            style={{fontFamily: 'Pacifico'}}
          >
            CS
          </button>
          <button onClick={handleClick} className={styles['nav-button']}>
            Projects
          </button>
          <button onClick={handleClick} className={styles['nav-button']}>
            About
          </button>
          <button onClick={handleClick} className={styles['nav-button']}>
            Contact
          </button>
        </div>
      </nav>
    </>
  )
}

export default Nav
