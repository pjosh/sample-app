import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from 'tests/utils';
import Avatar from './';

test('renders the avatar initials', () => {
  renderWithRouter(<Avatar name="Jane Doe" />);

  expect(screen.getByText('JD')).toBeInTheDocument();
});
