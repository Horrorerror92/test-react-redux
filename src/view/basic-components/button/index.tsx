import { FC } from 'react'
import { ButtonModel } from '../../../model/button/button'
import styles from './styles.module.css'

const ButtonComponent: FC<ButtonModel> = ({title, ...props}) => (
  <button {...props} className={styles.button}>
    {title}
  </button>
)

export default ButtonComponent