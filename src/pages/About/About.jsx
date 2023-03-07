import styles from './About.module.css'

function About() {
  return (
    <>
      <h1>About</h1>
      <img className={styles['about-img']} src="https://i.imgur.com/H5qSmJf.jpg" alt="" />
      <p>Former Chef turned <b>Full Stack Developer</b></p>
      <p>Currently <b>seeking full-time</b> opportunity in <b>Indianapolis, IN</b></p>
      <p>Recently graduated from a <b>full-time, 480+ hour, 12-week Software Engineering Immersive</b> at General Assembly</p> 
      <p>Previous work background ingrained a <b>strong work ethic</b> and established <b>discipline</b></p>
      <p>Studied Electrical Engineering at IvyTech Community College</p>
      <p>Education paved the way to develop <b>problem-solving skills</b></p>
    </>
  )
}

export default About
