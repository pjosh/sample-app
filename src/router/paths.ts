export const HOME = () => '/';
export const USER_POSTS = (userId: string | number = ':userId') => `/${userId}`;
export const USER_POST_DETAIL = (
  userId: string | number = ':userId',
  postId: string | number = ':postId'
) => `/${userId}/${postId}`;
