import React, { FC } from 'react'
import { InputModel } from '../../../model/input/input'
import styles from './styles.module.css'

const InputComponent: FC<InputModel> = (
  props: InputModel,
) => (
  <input { ...props } className = {styles.input} />
)

export default InputComponent