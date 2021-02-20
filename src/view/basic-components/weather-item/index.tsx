import React, { FC } from 'react'
import { IWeatherInformation } from '../../../model/data-model/weather-information'
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'
import styles from './styles.module.css'

const WeatherComponent: FC<IWeatherInformation> = (props: IWeatherInformation) => (
  <div className={styles.weather}>
    <p className={styles.description}>{props.data}</p>
  </div>
)

export default WeatherComponent
