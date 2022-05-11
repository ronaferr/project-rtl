import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import About from '../components/About';

test('Teste se a página contém um heading "h2" com o texto "About Pokédex"', () => {
  renderWithRouter(<About />);
  const tituloPagina = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
  expect(tituloPagina).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  renderWithRouter(<App />);
  const linkAbout = screen.getByRole('link', { name: 'About' });
  userEvent.click(linkAbout);
  const p1Parte1 = 'This application simulates a Pokédex,';
  const p1Parte2 = `${p1Parte1} a digital encyclopedia containing all Pokémons`;
  const p2 = 'One can filter Pokémons by type, and see more details for each one of them';
  const parágrafos1 = screen.getByText(p1Parte2);
  const parágrafos2 = screen.getByText(p2);
  expect(parágrafos1).toBeInTheDocument();
  expect(parágrafos2).toBeInTheDocument();
});

test('Teste se a página contém a imagem especifica de uma Pokédex', () => {
  renderWithRouter(<About />);
  const srcImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const imgPag = screen.getByRole('img', { name: 'Pokédex' });
  expect(imgPag).toHaveAttribute('src', srcImg);
});
