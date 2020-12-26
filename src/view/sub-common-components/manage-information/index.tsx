import React, {FC} from 'react';
import styles from './styles.module.css';
import WeatherComponent from '../../basic-components/weather-item'

const manageInformation: FC = (props) => {
  console.log(props)
  return (
    <div>
      <h4 className={ styles.manageHeader}> Information about City: </h4>
      <div className={ styles.manageInformation }>
        <WeatherComponent
        data = 'data'
        />
        <WeatherComponent
        data = 'data12'
        />
        <WeatherComponent
        data = 'data123'
        />
        <WeatherComponent
        data = 'data1q23'
        />
      </div>
    </div>
  ); 
}

export default manageInformation;
