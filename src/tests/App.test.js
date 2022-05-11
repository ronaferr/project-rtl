import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('verifique se possui os links na tela', () => {
  renderWithRouter(<App />);
  const links = screen.getAllByRole('link');
  expect(links[0]).toHaveTextContent('Home');
  expect(links[1]).toHaveTextContent('About');
  expect(links[2]).toHaveTextContent('Favorite Pokémons');
});

test('verifique se ao clicar em "Home" será direcionado para "/"', () => {
  const { history } = renderWithRouter(<App />);
  const linkHome = screen.getByRole('link', { name: 'Home' });
  userEvent.click(linkHome);

  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('verifique se ao clicar em "About" será direcionado para "/about"', () => {
  const { history } = renderWithRouter(<App />);
  const linkAbout = screen.getByRole('link', { name: 'About' });
  userEvent.click(linkAbout);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('Ao clicar em "Pokémons Favoritados" será direcionado para "/favorites"', () => {
  const { history } = renderWithRouter(<App />);
  const linkFavPok = screen.getByRole('link', { name: 'Favorite Pokémons' });
  userEvent.click(linkFavPok);

  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('Pagina será direcionada para "Not Found" ao acionar URL desconhecida', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/xablau');
  const textNotFound = screen.getByRole('heading',
    { name: 'Page requested not found Crying emoji', level: 2 });

  expect(textNotFound).toBeInTheDocument();
});
