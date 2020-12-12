import React, {FC} from 'react';
import ManageButtonsInput from '../../sub-common-components/manage-buttons-input/container'
import ManageInformation  from '../../sub-common-components/manage-information'
import styles from './styles.module.css';
import '../../common-styles/reset.module.css'
import '../../common-styles/styles.module.css'

const Manage: FC = () => {
  return (
    <div className={styles.manage}>
      <ManageButtonsInput />
      <ManageInformation/>
    </div>
  ); 
}

export default Manage;
