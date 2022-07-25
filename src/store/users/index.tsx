import React, { PropsWithChildren } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from 'services/jsonPlaceholder';
import { UsersProviderProps } from './users.types';

const UsersContext = React.createContext<UsersProviderProps>({});

export const UsersProvider = ({ children }: PropsWithChildren) => {
  const { isLoading, data: users } = useQuery(['getUsers'], getUsers);

  return (
    <UsersContext.Provider
      value={{
        isLoading,
        users
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
