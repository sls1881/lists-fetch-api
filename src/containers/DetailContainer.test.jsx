import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailContainer from './DetailContainer';

describe('Rick and Morty API', () => {
  it.skip('should render Rick and Morty character data', async () => {
    render(<DetailContainer />);

    screen.getByText('Details Page');

    const ul = await screen.findByRole('list', { name: 'character' });

    expect(ul).toMatchSnapshot();
  });
});
