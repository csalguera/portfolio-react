import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <main className={styles.footer}>
      <Link
        to='https://github.com/csalguera/portfolio-react'
        target='_blank'
        className={styles["link-tag"]}
      >
        GitHub
      </Link>
      <p>|</p>
      <p>Copyright © 2023 Carlos Salguera</p>
      <p>|</p>
      <p>Attributions</p>
    </main>
  )
}

export default Footer