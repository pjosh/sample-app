import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from 'tests/utils';
import Post from './';

test('renders all the post information', () => {
  renderWithRouter(
    <Post
      post={{
        userId: 1,
        id: 1,
        title: 'Title',
        body: 'Body',
        user: {
          id: 1,
          name: 'Jane Doe',
          username: 'janedoe',
          email: 'janedoe@unknown.com'
        }
      }}
    />
  );

  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Body')).toBeInTheDocument();
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  expect(screen.getByText('@janedoe')).toBeInTheDocument();
});
