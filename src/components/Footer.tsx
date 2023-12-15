import styles from './Footer.module.css'
import getYear from '../utils/dateUtils'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo</span> @ {getYear()}
      </p>
    </footer>
  )
}

export default Footer
