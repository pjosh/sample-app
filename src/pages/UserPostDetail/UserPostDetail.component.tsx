import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PostsContext from 'store/posts';
import UsersContext from 'store/users';
import Layout from 'components/Layout';
import Post from 'components/Post';
import CommentList from 'components/CommentList';
import { getPostComments } from 'services/jsonPlaceholder';
import usePostsWithUser from 'hooks/usePostsWithUser';

const UserPostDetail = () => {
  const { postId } = useParams();
  const { isLoading: isLoadingPosts, posts } = useContext(PostsContext);
  const { isLoading: isLoadingUsers, users } = useContext(UsersContext);
  const { isLoading: isLoadingComments, data: comments } = useQuery(
    [`getPostComments-${postId}`],
    () => getPostComments(postId as string)
  );
  const post = usePostsWithUser(posts, users, (item) => item.id.toString() === postId)[0];

  return (
    <Layout isLoading={!!(isLoadingPosts || isLoadingUsers || isLoadingComments)}>
      <Post isBig post={post} />
      <CommentList comments={comments} />
    </Layout>
  );
};

export default UserPostDetail;
