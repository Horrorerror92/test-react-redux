import React, {FC} from 'react';
import styles from './styles.module.css';
import WeatherComponent from '../../basic-components/weather-item'

interface informationStateItem {
  error: string,
  data: any
}

const manageInformation: FC<informationStateItem> = (props) => {

  return (
    <div>
      <h4 className={ styles.manageHeader}> Information about City: </h4>
      <div className={ styles.manageInformation }>
        {props.error ? (
          <WeatherComponent
            data = {props.error}
          />
        ):(
          Object.keys(props.data).map((cityId:any) => (
            <WeatherComponent
              data = {props.data[cityId]}
              key = {cityId}
            />
          ))
        )}
      </div>
    </div>
  ); 
}

export default manageInformation;
