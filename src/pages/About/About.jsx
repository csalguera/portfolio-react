import styles from './About.module.css'

function About() {
  return (
    <>
      <h1>About</h1>
      <img className={styles['about-img']} src="https://i.imgur.com/H5qSmJf.jpg" alt="" />
      <p>Former Chef turned Software Engineer</p>
      <p>Originally a Californian from San Diego</p>
      <p>Now a Hoosier from Indianapolis</p>
      <p>Passions include:</p>
      <ul>
        <li>Cooking</li>
        <li>Programming</li>
        <li>Board games</li>
        <li>Video games</li>
      </ul>
    </>
  )
}

export default About
