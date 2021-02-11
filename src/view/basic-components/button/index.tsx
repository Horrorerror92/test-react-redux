import { FC } from 'react'
import { ButtonModel } from '../../../model/button/button'
import styles from './styles.module.css'
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'

const ButtonComponent: FC<ButtonModel> = ({title, ...props}) => (
  <button {...props} className={styles.button}>
    {title}
  </button>
)

export default ButtonComponent