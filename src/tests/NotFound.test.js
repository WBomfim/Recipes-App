import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Verifica página NotFound', () => {
  it('Se renderiza a mensagem de erro "Not Found"', () => {
    renderWithRouter(<NotFound />);

    const notFound = screen.getByRole('heading', { level: 1, name: 'Not Found' });

    expect(notFound).toBeInTheDocument();
  });
});
