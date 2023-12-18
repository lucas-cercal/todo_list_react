import { ReactNode, MouseEvent } from 'react'

// css
import styles from './Modal.module.css'

interface Props {
  children: ReactNode
}

const Modal = ({ children }: Props) => {

  const closeModal = (e: MouseEvent): void => {
    document.getElementById("modal")!.style.display = 'none'
  }

  return (
    <div id='modal'>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
