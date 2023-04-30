// styles
import styles from './Landing.module.css'

function Landing({ landingRef }) {
  return (
    <main id='landing' ref={landingRef} style={{backgroundColor: '#bababa'}}>
      <div className={styles["landing-details"]}>
        <div className={styles.container}>
          <h1>Carlos Salguera</h1>
          <h2>Fullstack Developer</h2>
          <img className={styles['landing-img']} src="https://i.imgur.com/Rd1RywH.jpg" alt="" />
          <h3>TypeScript | PERN | MERN | JavaScript | CSS</h3>
        </div>
      </div>
    </main>
  )
}

export default Landing
