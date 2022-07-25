import { useMemo } from 'react';
import { Post } from 'store/posts/posts.types';
import { User } from 'store/users/users.types';
import { PostWithUser } from 'types';

const usePostsWithUser = (posts?: Post[], users?: User[], filter?: (item: Post) => boolean) => {
  const data = useMemo(() => {
    if (users && posts) {
      const postsFiltered = filter ? posts.filter(filter) : posts;

      return postsFiltered.map<PostWithUser>((post) => ({
        ...post,
        user: users.find((user) => user.id === post.userId) as User
      }));
    }

    return [];
  }, [posts, users]);

  return data;
};

export default usePostsWithUser;
