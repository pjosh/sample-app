import React from 'react';
import useScrollToTop from 'hooks/useScrollToTop';
import Header from 'components/Header';
import Loader from 'components/Loader';
import { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';

const Layout = ({ children, isLoading }: LayoutProps) => {
  useScrollToTop();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
