import React, { FC } from 'react';
import styles from './styles.module.css';
import '../../common-styles/reset.module.css';
import '../../common-styles/styles.module.css';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerName}>Weather viewer</h1>
      <h2 className={styles.headerDesc}>Type your City and see the current weather status</h2>
    </div>
  );
};

export default Header;
