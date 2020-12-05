import React, { FC } from 'react'
import { CityItem } from '../../../model/data-model/city-item'
import Button from '../button'
import styles from './styles.module.css'

const CityItemComponent: FC<CityItem> = (
  props: CityItem,
) => (
  <div className = {styles.cityItem}>
      <p className = {styles.description}>{props.city}</p> 
      <Button
      title = 'Select'
      />
      <Button
      title = 'Remove'
      />     
  </div>
)

export default CityItemComponent