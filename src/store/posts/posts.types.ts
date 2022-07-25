export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsProviderProps = {
  isLoading?: boolean;
  posts?: Post[];
};
