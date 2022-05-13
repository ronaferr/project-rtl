import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const TEXT_LINK_DETAILS = 'More details';

describe('Teste se as informações do pokémon selecionado são mostradas na tela', () => {
  /* const TEXT_LINK_DETAILS = 'More details'; */
  test('A página deve conter "Pikachu Details"', () => {
    renderWithRouter(<App />);
    const LINK_MOREDETAILS = screen.getByRole('link', { name: TEXT_LINK_DETAILS });
    userEvent.click(LINK_MOREDETAILS);
    const TITLE_POKEMONS_DETAILS = screen.getByRole('heading',
      { name: 'Pikachu Details', level: 2 });
    expect(TITLE_POKEMONS_DETAILS).toBeInTheDocument();
  });

  test('Não deve existir o link de navegação para os detalhes', () => {
    renderWithRouter(<App />);
    const LINK_MOREDETAILS = screen.getByRole('link', { name: TEXT_LINK_DETAILS });
    userEvent.click(LINK_MOREDETAILS);
    expect(LINK_MOREDETAILS).not.toBeInTheDocument();
  });

  test('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
    renderWithRouter(<App />);
    const LINK_MOREDETAILS = screen.getByRole('link', { name: TEXT_LINK_DETAILS });
    userEvent.click(LINK_MOREDETAILS);
    const TITLE_SUMMARY = screen.getByRole('heading', { name: 'Summary', level: 2 });
    expect(TITLE_SUMMARY).toBeInTheDocument();
  });

  test('A seção de detalhes deve conter um parágrafo com o resumo do pokémon', () => {
    renderWithRouter(<App />);
    const LINK_MOREDETAILS = screen.getByRole('link', { name: TEXT_LINK_DETAILS });
    userEvent.click(LINK_MOREDETAILS);
    const PARAGRAPH_POKEMON = screen.getByText(/This intelligent Pokémon roasts/i);
    expect(PARAGRAPH_POKEMON).toBeInTheDocument();
  });
});

describe('Teste se existe uma seção com os mapas das localizações do pokémon', () => {
  /* const TEXT_LINK_DETAILS = 'More details'; */

  test('Na seção de detalhes deverá existir um "Game Locations of Pikachu"', () => {
    renderWithRouter(<App />);
    const LINK_MOREDETAILS = screen.getByRole('link', { name: TEXT_LINK_DETAILS });
    userEvent.click(LINK_MOREDETAILS);
    const TEXT_TITLE_MAPS = 'Game Locations of Pikachu';
    const TITLE_MAPS = screen.getByRole('heading', { name: TEXT_TITLE_MAPS, level: 2 });
    expect(TITLE_MAPS).toBeInTheDocument();
  });

  test('As localizações do pokémon devem ser mostradas na seção de detalhes;', () => {
    renderWithRouter(<App />);
    const URL_MAP1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const URL_MAP2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    const LINK_MOREDETAILS = screen.getByRole('link', { name: TEXT_LINK_DETAILS });
    userEvent.click(LINK_MOREDETAILS);
    const MAPS = screen.getAllByAltText('Pikachu location');
    const LOCATION_MAP1 = screen.getByText(/Kanto Viridian Forest/i);
    const LOCATION_MAP2 = screen.getByText(/Kanto Power Plant/i);
    expect(LOCATION_MAP1).toBeInTheDocument();
    expect(LOCATION_MAP2).toBeInTheDocument();
    expect(MAPS).toHaveLength(2);
    expect(MAPS[0]).toHaveAttribute('src', URL_MAP1);
    expect(MAPS[1]).toHaveAttribute('src', URL_MAP2);
  });
});

describe('Teste se o usuário pode favoritar o pokémon.', () => {
  /* const TEXT_LINK_DETAILS = 'More details'; */
  test('Verifique os componentes de favoritar na', () => {
    renderWithRouter(<App />);
    const LINK_MOREDETAILS = screen.getByRole('link', { name: TEXT_LINK_DETAILS });
    userEvent.click(LINK_MOREDETAILS);
    const CHECKBOX_FAVORITE = screen.getByRole('checkbox',
      { name: 'Pokémon favoritado?' });
    const LABEL_CHECKBOX = screen.getByLabelText('Pokémon favoritado?');
    expect(CHECKBOX_FAVORITE).toBeInTheDocument();
    expect(LABEL_CHECKBOX).toBeInTheDocument();
  });
});
