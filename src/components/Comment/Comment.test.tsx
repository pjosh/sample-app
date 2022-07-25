import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from 'tests/utils';
import Comment from './';

test('renders all the comment information', () => {
  renderWithRouter(
    <Comment
      comment={{
        postId: 1,
        id: 1,
        email: 'janedoe@unknown.com',
        name: 'Name',
        body: 'Body'
      }}
    />
  );

  expect(screen.getByText('janedoe@unknown.com')).toBeInTheDocument();
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Body')).toBeInTheDocument();
});
