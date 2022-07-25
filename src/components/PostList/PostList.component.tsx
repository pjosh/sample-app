import React from 'react';
import Post from 'components/Post';
import { PostListProps } from './PostList.types';

const PostList = ({ posts }: PostListProps) => (
  <>
    {posts.map((post) => (
      <Post key={`post-${post.id}`} post={post} />
    ))}
  </>
);

export default PostList;
