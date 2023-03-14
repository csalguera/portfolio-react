// styles
import styles from './Nav.module.css'

const Nav = (props) => {
  const {
    scrollToRef,
    landingRef,
    projectsRef,
    aboutRef,
    contactRef,
    url,
    setUrl,
  } = props

  function handleClick(evt) {
    if (evt.target.textContent === 'Projects') {
      scrollToRef(projectsRef)
    } else if (evt.target.textContent === 'About') {
      scrollToRef(aboutRef)
    } else if (evt.target.textContent === 'Contact') {
      scrollToRef(contactRef)
    }
  }

  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <button
            onClick={() => scrollToRef(landingRef)}
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
