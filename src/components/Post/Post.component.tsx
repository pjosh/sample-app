import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { USER_POSTS, USER_POST_DETAIL } from 'router/paths';
import Avatar from 'components/Avatar';
import { PostProps } from './Post.types';
import styles from './Post.module.scss';

const Post = ({ isBig = false, post }: PostProps) => {
  const navigate = useNavigate();
  const userPostUrl = USER_POSTS(post.userId);
  const onClickPost = () => {
    navigate(USER_POST_DETAIL(post.userId, post.id));
  };
  const onClickUser = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <button className={classNames(styles.container, { [styles.big]: isBig })} onClick={onClickPost}>
      <Link to={userPostUrl} onClick={onClickUser}>
        <Avatar className={styles.avatar} name={post.user.name} />
      </Link>
      <div className={styles.content}>
        <Link className={styles.user} to={userPostUrl} onClick={onClickUser}>
          <span className={styles.name}>{post.user.name}</span>{' '}
          <span className={styles.username}>{`@${post.user.username}`}</span>
        </Link>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.text}>{post.body}</div>
      </div>
    </button>
  );
};

export default Post;
