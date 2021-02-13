import React, { FC } from 'react';
import ManageCity from '../../sub-common-components/manage-city/container';
import styles from './styles.module.css';
import '../../common-styles/reset.module.css';
import '../../common-styles/styles.module.css';

const Memory: FC = () => {
  return (
    <div className={styles.module}>
      <ManageCity />
    </div>
  );
};

export default Memory;
