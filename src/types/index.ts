import { Post } from 'store/posts/posts.types';
import { User } from 'store/users/users.types';

export type PostWithUser = Post & { user: User };
export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
