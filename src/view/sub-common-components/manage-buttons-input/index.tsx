import React, { FC } from 'react'
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'
import styles from './styles.module.css'
import Button from '../../basic-components/button'
import Input from '../../basic-components/input'
import { IGetCity } from '../../../model/data-model/get-city'

let city: string = ''

const ManageButtonsInput: FC<IGetCity> = ({
  OnGetCityInformation,
  OnAddCityToList,
  cityList,
  errorMessage,
  errorMessageFromApi,
}) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    city = event.target.value
  }

  const handlePressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      OnGetCityInformation(city.trim())
    }
  }
  return (
    <div className={styles.manageButtonBlock}>
      <div className={styles.manageButtonsInput}>
        <Input placeholder="Type City name here" type="text" onChange={handleInput} onKeyUp={handlePressed} />
        <div className={styles.groupButton}>
          <Button title="Submit" onClick={() => OnGetCityInformation(city.trim())} />
          <Button title="Remember" onClick={() => OnAddCityToList(city.trim(), cityList.length, cityList)} />
        </div>
      </div>
      {errorMessage.length > 0 ? <span className={styles.errorMsg}>{errorMessage}</span> : null}
      {errorMessageFromApi.length > 0 ? <span className={styles.errorMsg}>{errorMessageFromApi}</span> : null}
    </div>
  )
}

export default ManageButtonsInput
