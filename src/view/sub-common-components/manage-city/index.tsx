import React, {FC} from 'react';
import styles from './styles.module.css';
import Button from '../../basic-components/button'

interface manageStateItem {
  cityList: Array<string>,
  OnGetCityInformation: (city: string) => void,
  OnRemoveCityFromList: (cityId: any)=> void
}

const manageCity: FC<manageStateItem> = ({
  cityList,
  OnGetCityInformation,
  OnRemoveCityFromList
}) => {
  return (
    <div className={styles.manageCity}>
      <h4 className={styles.manageHeader}>Cities list:</h4>
      <div className={styles.manageCityItem}>
        { cityList.length>0 ? (
          Object.keys(cityList).map((cityId:any) => (
            <div className = {styles.cityItem} key = {cityId}>
              <p className = {styles.description}>{cityList[cityId]}</p> 
              <Button
                title = 'Submit'
                onClick={() => OnGetCityInformation(cityList[cityId])}
              />
              <Button
                title = 'Remove'
                onClick={() => OnRemoveCityFromList(cityId)}
              />     
            </div>
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
