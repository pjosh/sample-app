import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.container}>
    <div className={styles.loader}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  </div>
);

export default Loader;
