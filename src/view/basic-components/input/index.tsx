import React, { FC } from 'react'
import { InputModel } from '../../../model/input/input'
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'
import styles from './styles.module.css'

const InputComponent: FC<InputModel> = (
  props: InputModel,
) => (
  <input { ...props } className = {styles.input} />
)

export default InputComponent