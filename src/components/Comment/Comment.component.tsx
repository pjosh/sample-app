import React from 'react';
import { CommentProps } from './Comment.types';
import styles from './Comment.module.scss';

const Comment = ({ comment }: CommentProps) => (
  <div className={styles.container}>
    <div className={styles.user}>{comment.email}</div>
    <div className={styles.title}>{comment.name}</div>
    <div className={styles.text}>{comment.body}</div>
  </div>
);

export default Comment;
