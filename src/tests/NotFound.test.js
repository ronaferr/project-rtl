import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

test('Verifique se contém um h2 com o texto "Page requested not found 😭"', () => {
  renderWithRouter(<NotFound />);
  const MESSAGE_NOTFOUND = 'Page requested not found Crying emoji';
  const TITLE_NOTFOUND = screen.getByRole('heading',
    { name: MESSAGE_NOTFOUND, level: 2 });
  expect(TITLE_NOTFOUND).toBeInTheDocument();
});

test('Teste se a página mostra a imagem esperada', () => {
  renderWithRouter(<NotFound />);
  const URL_IMAGE = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  const ALT_IMAGR = 'Pikachu crying because the page requested was not found';
  const IMAGE_NOTFOUND = screen.getByRole('img', { name: ALT_IMAGR });
  expect(IMAGE_NOTFOUND).toHaveAttribute('src', URL_IMAGE);
});
