import React, { FC } from 'react'
import Manage from '../manage'
import Memory from '../memory'
import styles from './styles.module.css'
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'

const TwoColumn: FC = () => {
  return (
    <div className={styles.twoColumn}>
      <Manage />
      <Memory />
    </div>
  )
}

export default TwoColumn
