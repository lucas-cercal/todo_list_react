import React from 'react'
import getYear from '../../utils/dateUtils'
import styles from './Header.module.css'

const Header = () => {
  const renderStars = () => {
    const starArray = new Array(6).fill(null)
    return (
      <>
        {starArray.map((_, index) => (
          <React.Fragment key={index}>
            <div className={styles.stars}></div>
            <div className={styles.stars2}></div>
          </React.Fragment>
        ))}
      </>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.space}>
        {renderStars()}
      </div>
      <h1>React + TS Todo @ {getYear()}</h1>
    </header>
  )
}

export default Header
