import styles from './Landing.module.css'

function Landing({ landingRef }) {
  return (
    <main className='page-component-container' ref={landingRef}>
      <h1>Carlos Salguera</h1>
      <h2>Fullstack Developer</h2>
      <img className={styles['landing-img']} src="https://i.imgur.com/H5qSmJf.jpg" alt="" />
      <h3>TypeScript | PERN | MERN | JavaScript | CSS</h3>
    </main>
  )
}

export default Landing
