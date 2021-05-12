import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMorty from './RickAndMorthy';
import { MemoryRouter } from 'react-router-dom';

describe('Rick and Morty API', () => {
  it('should render Rick and Morty character data', async () => {
    render(
      <MemoryRouter>
        <RickAndMorty />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });

    expect(ul).toMatchSnapshot();
  });
});
