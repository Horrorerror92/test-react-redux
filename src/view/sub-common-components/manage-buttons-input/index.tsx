import React, { FC } from 'react'
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'
import styles from './styles.module.css'
import Button from '../../basic-components/button'
import Input from '../../basic-components/input'

interface IgetCityProps {
  OnGetCityInformation: (city: string) => void,
  OnAddCityToList: (city: string, cityCount:number, cityList:Array<string>) => void,
  cityList: Array<string>,
  cityDuplicate: boolean,
  shortName: boolean
}

let city:string = '';

const manageButtonsInput: FC<IgetCityProps> = ({
  OnGetCityInformation,
  OnAddCityToList,
  cityList,
  cityDuplicate,
  shortName
}) => {

const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  city = event.target.value
}

const handlePressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if(event.key === 'Enter') {
    OnGetCityInformation(city.trim())
  }
}
  return (
    <div className = {styles.manageButtonBlock}>
      <div className = {styles.manageButtonsInput}>
          <Input 
            placeholder = 'Type City name here'
            type = 'text'
            onChange = {handleInput}
            onKeyDown = {handlePressed}
          />
          <div className = {styles.groupButton}>
            <Button
              title = 'Submit'
              onClick={() => OnGetCityInformation(city.trim())}
            />
            <Button
              title = 'Remember'
              onClick={() => OnAddCityToList(city.trim(), cityList.length, cityList)}
            />
          </div>
      </div>
      { cityDuplicate ? (
         <span className = {styles.duplicateMsg}>You can't remember the city twice.</span> 
        ):(
        null
      )}
      { shortName ? (
         <span className = {styles.duplicateMsg}>The name is too short.</span> 
        ):(
        null
      )}
    </div>
  ); 
}


export default manageButtonsInput;
