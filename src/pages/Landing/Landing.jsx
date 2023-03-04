import styles from './Landing.module.css'

function Landing() {
  return (
    <>
      <h1>Carlos Salguera</h1>
      <h2>Fullstack Developer</h2>
      <img className={styles['landing-img']} src="https://i.imgur.com/H5qSmJf.jpg" alt="" />
      <h3>JavaScript | MERN | CSS</h3>
    </>
  )
}

export default Landing
