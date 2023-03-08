import styles from './Nav.module.css'

const Nav = (props) => {
  const {
    scrollToRef,
    landingRef,
    projectsRef,
    aboutRef,
    contactRef,
  } = props

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
          <button onClick={() => scrollToRef(projectsRef)} className={styles['nav-button']}>
            Projects
          </button>
          <button onClick={() => scrollToRef(aboutRef)} className={styles['nav-button']}>
            About
          </button>
          <button onClick={() => scrollToRef(contactRef)} className={styles['nav-button']}>
            Contact
          </button>
        </div>
      </nav>
    </>
  )
}

export default Nav
