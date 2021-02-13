import React, { FC } from 'react';
import '../../common-styles/reset.module.css';
import '../../common-styles/styles.module.css';
import styles from './styles.module.css';
import WeatherComponent from '../../basic-components/weather-item';

interface informationStateItem {
  error: string;
  data: any;
}

const manageInformation: FC<informationStateItem> = (props) => {
  return (
    <div>
      <h4 className={styles.manageHeader}> Information about City: </h4>
      <div className={styles.manageInformation}>
        {props.error ? (
          <span className={styles.description}>No information</span>
        ) : (
          Object.keys(props.data).map((cityId: any) => <WeatherComponent data={props.data[cityId]} key={cityId} />)
        )}
        {props.data.length === 0 && props.error === null ? (
          <span className={styles.description}>No information</span>
        ) : null}
      </div>
    </div>
  );
};

export default manageInformation;
