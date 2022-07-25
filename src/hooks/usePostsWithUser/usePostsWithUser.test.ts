import { renderHook } from '@testing-library/react';
import usePostsWithUser from './';

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderi'
  },
  {
    userId: 2,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores'
  }
];
const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  }
];

test('returns all posts with it user', () => {
  const { result } = renderHook(() => usePostsWithUser(posts, users));

  expect(result.current).toEqual([
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderi',
      user: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    },
    {
      userId: 2,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores',
      user: {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv'
      }
    }
  ]);
});

test('returns all filtered posts with it user', () => {
  const { result } = renderHook(() => usePostsWithUser(posts, users, (item) => item.id === 1));

  expect(result.current).toEqual([
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderi',
      user: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    }
  ]);
});
