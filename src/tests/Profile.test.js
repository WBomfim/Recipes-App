import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Profile from '../pages/Profile';

const STORAGE = { email: 'email@mail.com' };

describe('Testa as funcionalidades da tela de Profile', () => {
  it('Verifica se aparece o email de login da pessoa usuária', () => {
    localStorage.setItem('user', JSON.stringify(STORAGE));
    renderWithRouter(<Profile />);

    const email = screen.getByText(/email@mail.com/i);

    expect(email).toBeInTheDocument();
  });

  it('Verifica se existem os botões "Done Recipes", "Favorite Recipes" e "Logout"',
    () => {
      renderWithRouter(<Profile />);

      const doneRecipes = screen.getByRole('button', { name: /done recipes/i });
      const favoriteRecipes = screen.getByRole('button', { name: /favorite recipes/i });
      const logout = screen.getByRole('button', { name: /logout/i });

      expect(doneRecipes).toBeInTheDocument();
      expect(favoriteRecipes).toBeInTheDocument();
      expect(logout).toBeInTheDocument();
    });

  it('Verifica se ao clicar no botão "Done Recipes" é renderizada a rota correta', () => {
    const { history } = renderWithRouter(<Profile />);

    const doneRecipes = screen.getByRole('button', { name: /done recipes/i });
    userEvent.click(doneRecipes);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/done-recipes');
  });

  it('Verifica se ao clicar no botão "Favorite Recipes" é renderizada a rota correta',
    () => {
      const { history } = renderWithRouter(<Profile />);

      const favoriteRecipes = screen.getByRole('button', { name: /favorite recipes/i });
      userEvent.click(favoriteRecipes);
      const { location: { pathname } } = history;

      expect(pathname).toBe('/favorite-recipes');
    });

  it('Verifica se ao clicar no botão "Logout" é renderizada a rota correta', () => {
    const { history } = renderWithRouter(<Profile />);

    const logout = screen.getByRole('button', { name: /logout/i });
    userEvent.click(logout);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
  });
});
