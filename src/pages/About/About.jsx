import styles from './About.module.css'

function About({ aboutRef }) {
  return (
    <main className='page-component-container' ref={aboutRef}>
      <h1>About</h1>
      <img className={styles['about-img']} src="https://i.imgur.com/H5qSmJf.jpg" alt="" />
      <div className={styles["about-container"]}>
        <h2>Goal</h2>
        <p>Software Engineer focused on <b>Full Stack Development</b></p>
        <p>Currently <b>seeking full-time</b> opportunity in <b>Indianapolis, IN</b></p>
        <p>Recently graduated from a <b>full-time, 480+ hour, 12-week Software Engineering Immersive</b> at General Assembly</p> 
        <p>Previous work background ingrained a <b>strong work ethic</b> and established <b>discipline</b></p>
        <p>Studied Electrical Engineering at IvyTech Community College</p>
        <p>Education paved the way to develop <b>problem-solving skills</b></p>
      </div>
      <div className={styles["about-container"]}>
        <h2>Skills</h2>
        <ul>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Sequelize</li>
          <li>Mongoose</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
      <div className={styles["about-container"]}>
        <h2>Journey</h2>
        <p>I have always been fascinated by the STEM fields since I was a kid, excelling in mathematics and physics. Contrary to my inclination, I spent my adulthood working in the food industry. Throughout 2018 until the end of 2019 I attended IvyTech to study Electrical Engineering. Due to unforeseen circumstances, I put my education on hold to focus on my career. I received multiple promotions but ultimately concluded that I was not satisfied. In November of 2022, I made the decision to pursue Software Engineering. I graduated from General Assembly in March of 2023 and now seek a full-time opportunity to showcase what I have learned.</p>
      </div>
    </main>
  )
}

export default About
