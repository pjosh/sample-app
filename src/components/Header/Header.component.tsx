import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'router/paths';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.container}>
    <Link to={HOME()}>Sample App</Link>
  </div>
);

export default Header;
