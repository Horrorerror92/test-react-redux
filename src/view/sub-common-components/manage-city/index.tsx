import React, {FC} from 'react'
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'
import styles from './styles.module.css'
import Button from '../../basic-components/button'

interface manageStateItem {
  cityList: Array<string>,
  limit: boolean,
  OnGetCityInformation: (city: string) => void,
  OnRemoveCityFromList: (city: string)=> void
}

const manageCity: FC<manageStateItem> = ({
  cityList,
  limit,
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
                onClick={() => OnRemoveCityFromList(cityList[cityId])}
              />     
            </div>
          ))
          ):(
            <div>
            City list is empty.
            </div>
          )
        }
        { limit ? (
          <span className = {styles.limitMsg}>You can save no more than 5 cities. </span>
        ):(
          null
        )
        }
      </div>
    </div>
  ); 
}

export default manageCity;
