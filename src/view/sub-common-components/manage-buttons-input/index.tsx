import React, {FC} from 'react';
import styles from './styles.module.css';
import Button from '../../basic-components/button'
import Input from '../../basic-components/input'

const manageButtonsInput: FC = () => {
  return (
    <div className={styles.manageButtonsInput}>
      <Input 
        placeholder = 'Type City name here'    
       />
       <div className={styles.groupButton}>
        <Button
          title = 'Submit'
        />
        <Button
          title = 'Remember'
        />
      </div>
    </div>
  ); 
}

export default manageButtonsInput;