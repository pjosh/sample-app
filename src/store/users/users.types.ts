export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type UsersProviderProps = {
  isLoading?: boolean;
  users?: User[];
};
