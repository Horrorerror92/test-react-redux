import React, { FC } from 'react';
import styles from './styles.module.css';
import Button from '../../basic-components/button'
import Input from '../../basic-components/input'

interface IgetCityProps {
  OnGetCityInformation: (city: string) => void,
  OnAddCityToList: (city: string, cityId:number|null) => void,
  cityId:number|null
}

let city:string = '';

const manageButtonsInput: FC<IgetCityProps> = ({
  OnGetCityInformation,
  OnAddCityToList,
  cityId
}) => {

const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.stopPropagation()
  event.preventDefault()
  city = event.target.value
}

  return (
    <div className={styles.manageButtonsInput}>
        <Input 
          placeholder = 'Type City name here'
          type = 'text'
          onChange = {handleInput}
        />
        <div className={styles.groupButton}>
          <Button
            title = 'Submit'
            onClick={() => OnGetCityInformation(city)}
          />
          <Button
            title = 'Remember'
            onClick={() => OnAddCityToList(city, cityId)}
          />
        </div>
    </div>
  ); 
}


export default manageButtonsInput;
