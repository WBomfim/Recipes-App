import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import ExploreFoods from '../pages/ExploreFoods';

const rota = '/explore/foods';

describe('Verifica a renderização na tela principal Explore Foods', () => {
  it('Verifica se o ícone de perfil é renderizado', () => {
    renderWithRouter(<App />, rota);

    const profileIcon = screen.queryByTestId('profile-top-btn');
    expect(profileIcon).toBeInTheDocument();
  });

  it('Verificar se é renderizado o título `Explore Foods`', () => {
    renderWithRouter(<App />, rota);

    const title = screen.getByText(/Explore Foods/i);
    expect(title).toBeInTheDocument();
  });
});

describe('Verifica se é renderizado três botões de explorar, ', () => {
  it('Verifica se é renderizado o botão By Ingredient', () => {
    renderWithRouter(<App />, rota);

    const button = screen.queryByText(/by ingredient/i);
    expect(button).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão `By Ingredient` a rota é alterada', () => {
    const { history } = renderWithRouter(<ExploreFoods />, rota);

    const button = screen.queryByText(/By Ingredient/i);
    userEvent.click(button);
    expect(button).toBeInTheDocument();

    const { location: { pathname } } = history;

    expect(pathname).toBe('/explore/foods/ingredients');
  });

  it('Verifica se é renderizado o botão `By Nationality`', () => {
    renderWithRouter(<App />, rota);

    const button = screen.queryByText(/By Nationality/i);
    expect(button).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão `By Nationality` a rota é alterada', () => {
    const { history } = renderWithRouter(<ExploreFoods />, rota);

    const button = screen.queryByText(/By Nationality/i);
    userEvent.click(button);
    expect(button).toBeInTheDocument();

    const { location: { pathname } } = history;

    expect(pathname).toBe('/explore/foods/nationalities');
  });

  it('Verifica se é renderizado o botão `Surprise Me`', () => {
    renderWithRouter(<App />, rota);

    const button = screen.queryByText(/Surprise Me/i);
    expect(button).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão `Surprise Me` a rota é alterada', () => {
    const { history } = renderWithRouter(<App />, rota);

    const button = screen.queryByText(/Surprise me!/i);
    userEvent.click(button);
    expect(button).toBeInTheDocument();

    const { location: { pathname } } = history;

    expect(pathname).toBe('/explore/foods');
  });
});
