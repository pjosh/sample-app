import React, { PropsWithChildren } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'services/jsonPlaceholder';
import { PostsProviderProps } from './posts.types';

const PostsContext = React.createContext<PostsProviderProps>({});

export const PostsProvider = ({ children }: PropsWithChildren) => {
  const { isLoading, data: posts } = useQuery(['getPosts'], getPosts);

  return (
    <PostsContext.Provider
      value={{
        isLoading,
        posts
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
