import React, {FC} from 'react';
import styles from './styles.module.css';
import CityItemComponent from '../../basic-components/city-item'

interface manageStateItem {
  cityList: Array<string>
}

const manageCity: FC<manageStateItem> = (props) => {
  return (
    <div className={styles.manageCity}>
      <h4 className={styles.manageHeader}>Cities list:</h4>
      <div className={styles.manageCityItem}>
        { props.cityList.length>0 ? (
          Object.keys(props.cityList).map((cityId:any) => (
            <CityItemComponent
              city = {props.cityList[cityId]}
              key = {cityId}
            />
          ))
          ):(
            <div>
            City list is empty.
            </div>
          )
        }
      </div>
    </div>
  ); 
}

export default manageCity;
