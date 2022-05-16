import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se é renderizado as informações de determinado pokémon', () => {
  test('O nome "Pikachu" do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);

    const NAME_POKEMON = screen.getByTestId('pokemon-name');
    expect(NAME_POKEMON).toBeInTheDocument();
    expect(NAME_POKEMON).toHaveTextContent('Pikachu');

    const TYPE_POKEMON = screen.getByTestId('pokemon-type');
    expect(TYPE_POKEMON).toBeInTheDocument();
    expect(TYPE_POKEMON).toHaveTextContent('Electric');

    const TEXT_WEIGTH = 'Average weight: 6.0 kg';
    const WEIGTH_POKEMON = screen.getByTestId('pokemon-weight');
    expect(WEIGTH_POKEMON).toBeInTheDocument();
    expect(WEIGTH_POKEMON).toHaveTextContent(TEXT_WEIGTH);

    const URL_IMAGE = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const IMG_POKEMON = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(IMG_POKEMON).toHaveAttribute('src', URL_IMAGE);
    expect(IMG_POKEMON).toBeInTheDocument();
  });

  test('Teste de contem um link para exibição de detalhes', () => {
    renderWithRouter(<App />);
    const URL_MORE_DETAILS = 'http://localhost/pokemons/25';
    const LINK_MORE_DETAILS = screen.getByRole('link', { name: /more details/i });
    expect(LINK_MORE_DETAILS).toHaveProperty('href', URL_MORE_DETAILS);
    expect(LINK_MORE_DETAILS).toBeInTheDocument();
  });

  test('Teste de contem um checkbox para favoritar na seção "Detalhes"', () => {
    renderWithRouter(<App />);
    const LINK_MORE_DETAILS = screen.getByRole('link', { name: /more details/i });
    userEvent.click(LINK_MORE_DETAILS);
    const INPUT_FAVORITE = screen.getByRole('checkbox',
      { name: /Pokémon favoritado?/i });
    userEvent.click(INPUT_FAVORITE);
    const URL_IMG_FAVORITE = '/star-icon.svg';
    const IMG_FAVORITE = screen.getByRole('img',
      { name: 'Pikachu is marked as favorite' });
    expect(IMG_FAVORITE).toHaveAttribute('src', URL_IMG_FAVORITE);
  });
});
