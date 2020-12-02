import React, {FC} from 'react';
import styles from './styles.module.css';
import Button from '../../basic-components/button'

const manageButtonsInput: FC = () => {
  return (
    <div className={styles.manageButtonsInput}>
      <Button
        title = 'Submit'
      />
      <Button
        title = 'Remember'
      />
    </div>
  ); 
}

export default manageButtonsInput;
