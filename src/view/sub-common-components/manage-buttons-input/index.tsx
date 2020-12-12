import React, { FC } from 'react';
import styles from './styles.module.css';
import Button from '../../basic-components/button'
import Input from '../../basic-components/input'

interface IgetCityProps {
  OnGetCityInformation: (city: string) => void
}

const manageButtonsInput: FC<IgetCityProps> = ({
  OnGetCityInformation
}) => {

const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.stopPropagation()
  event.preventDefault()
  console.log(event.target.value)
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
            onClick={() => OnGetCityInformation('Minsk')}
          />
          <Button
            title = 'Remember'
          />
        </div>
    </div>
  ); 
}


export default manageButtonsInput;
