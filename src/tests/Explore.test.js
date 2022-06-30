import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Explore from '../pages/Explore';
import renderWithRouter from './renderWithRouter';

describe('Verifica o funcionamento da tela Explore', () => {
  it('Verifica se o ícone de perfil é renderizado', () => {
    renderWithRouter(<Explore />, '/explore');

    const profileIcon = screen.queryByTestId('profile-top-btn');
    expect(profileIcon).toBeInTheDocument();
  });

  it('Verificar se é renderizado o título `Explore`', () => {
    renderWithRouter(<Explore />, '/explore');

    const title = screen.queryByTestId('page-title');
    expect(title).toHaveTextContent('Explore');
  });

  it('Verificar se é renderizado o botão  Explore Foods', () => {
    renderWithRouter(<Explore />, '/explore');

    const button = screen.queryByTestId('explore-foods');
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  it('Verifica se o usuário é redirecionado ao clicar no botão Explore Foods', () => {
    const { history } = renderWithRouter(<Explore />, '/explore');

    const button = screen.queryByTestId('explore-foods');
    userEvent.click(button);
    expect(button).toBeInTheDocument();

    const { location: { pathname } } = history;

    expect(pathname).toBe('/explore/foods');
  });

  it('Verifica se o usuário é redirecionado ao clicar no botão Explore Drinks', () => {
    const { history } = renderWithRouter(<Explore />, '/explore');

    const button = screen.queryByText(/explore drinks/i);
    userEvent.click(button);
    expect(button).toBeInTheDocument();

    const { location: { pathname } } = history;

    expect(pathname).toBe('/explore/drinks');
  });
});
