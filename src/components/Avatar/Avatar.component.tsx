import React from 'react';
import classNames from 'classnames';
import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';

const Avatar = ({ className, name }: AvatarProps) => {
  const initials = name
    .split(' ')
    .map((item) => item[0])
    .join('');

  return <div className={classNames(styles.container, className)}>{initials}</div>;
};

export default Avatar;
