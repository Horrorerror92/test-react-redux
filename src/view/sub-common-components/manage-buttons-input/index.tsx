import React, { FC } from 'react';
import styles from './styles.module.css';
import Button from '../../basic-components/button'
import Input from '../../basic-components/input'

interface IgetCityProps {
  OnGetCityInformation: (city: string) => void,
  OnAddCityToList: (city: string, cityCount:number, cityList:Array<string>) => void,
  cityId:number|null,
  cityList: Array<string>,
  cityDuplicate: boolean
}

let city:string = '';

const manageButtonsInput: FC<IgetCityProps> = ({
  OnGetCityInformation,
  OnAddCityToList,
  cityList,
  cityDuplicate
}) => {

const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.stopPropagation()
  event.preventDefault()
  city = event.target.value
}

  return (
    <div className = {styles.manageButtonBlock}>
      <div className = {styles.manageButtonsInput}>
          <Input 
            placeholder = 'Type City name here'
            type = 'text'
            onChange = {handleInput}
          />
          <div className = {styles.groupButton}>
            <Button
              title = 'Submit'
              onClick={() => OnGetCityInformation(city)}
            />
            <Button
              title = 'Remember'
              onClick={() => OnAddCityToList(city, cityList.length, cityList)}
            />
          </div>
      </div>
      { cityDuplicate ? (
         <span className = {styles.duplicateMsg}>You can't remember the city twice.</span> 
        ):(
        null
      )}
    </div>
  ); 
}


export default manageButtonsInput;
