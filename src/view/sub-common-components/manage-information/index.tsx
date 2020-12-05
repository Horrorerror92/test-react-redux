import React, {FC} from 'react';
import styles from './styles.module.css';
import WeatherComponent from '../../basic-components/weather-item'

const manageInformation: FC = () => {
  return (
    <div>
      <h4 className={ styles.manageHeader}> Information about City: </h4>
      <div className={ styles.manageInformation }>
        <WeatherComponent
        name = 'name'
        data = 'data'
        />
        <WeatherComponent
        name = 'name1'
        data = 'data12'
        />
        <WeatherComponent
        name = 'name12'
        data = 'data123'
        />
        <WeatherComponent
        name = 'name123'
        data = 'data1q23'
        />
      </div>
    </div>
  ); 
}

export default manageInformation;
