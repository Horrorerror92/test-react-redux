import React, { FC } from 'react'
import { ButtonModel } from '../../../model/button/button'
import styles from './styles.module.css'
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'

const buttonComponent: FC<ButtonModel> = ({ title, ...props }) => (
  <button {...props} className={styles.button}>
    {title}
  </button>
)

export default buttonComponent
