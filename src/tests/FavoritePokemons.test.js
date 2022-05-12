import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

test('Verifique "No favorite pokemon found", se não tiver favoritos.', () => {
  renderWithRouter(<FavoritePokemons />);
  const MESSAGE_NOTFOUND = screen.getByText('No favorite pokemon found');
  expect(MESSAGE_NOTFOUND).toBeInTheDocument();
});
