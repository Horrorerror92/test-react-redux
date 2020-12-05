import React, {FC} from 'react';
import styles from './styles.module.css';
import CityItemComponent from '../../basic-components/city-item'

const manageCity: FC = () => {
  return (
    <div className={styles.manageCity}>
      <h4 className={styles.manageHeader}>Cities list:</h4>
      <div className={styles.manageCityItem}>
        <CityItemComponent
          city = 'city-dasd-dasd-da'
        />
        <CityItemComponent
          city = 'city1asd'
        />
        <CityItemComponent
          city = 'city2asd'
        />
        <CityItemComponent
          city = 'city3a'
        />
      </div>
    </div>
  ); 
}

export default manageCity;
