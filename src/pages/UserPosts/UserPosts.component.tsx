import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import PostsContext from 'store/posts';
import UsersContext from 'store/users';
import Layout from 'components/Layout';
import PostList from 'components/PostList';
import usePostsWithUser from 'hooks/usePostsWithUser';

const UserPosts = () => {
  const { userId } = useParams();
  const { isLoading: isLoadingPosts, posts } = useContext(PostsContext);
  const { isLoading: isLoadingUsers, users } = useContext(UsersContext);
  const data = usePostsWithUser(posts, users, (item) => item.userId.toString() === userId);

  return (
    <Layout isLoading={!!(isLoadingPosts || isLoadingUsers)}>
      <PostList posts={data} />
    </Layout>
  );
};

export default UserPosts;
