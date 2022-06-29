import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import ExploreFoodsAndDrinks from '../pages/ExploreFoodsAndDrinks';

const oneMeals = require('./helpers/mocks/oneMeals');
const oneDrinks = require('./helpers/mocks/oneDrinks');

const ROTA = '/explore/foods';
const ROTADRINK = '/explore/drinks';

describe('Verifica funcionalidades da página ExploreFoodsAndDrinks na rota foods', () => {
  it('Testa se existem 3 botões ao renderizar a página', () => {
    renderWithRouter(<ExploreFoodsAndDrinks />, ROTA);

    const btnByIngredient = screen.getByRole('button', { name: /by ingredient/i });
    const btnByNationality = screen.getByRole('button', { name: /by nationality/i });
    const btnSurprise = screen.getByRole('button', { name: /surprise me!/i });

    expect(btnByIngredient).toBeInTheDocument();
    expect(btnByNationality).toBeInTheDocument();
    expect(btnSurprise).toBeInTheDocument();
  });

  it('Testa se ao clicar no botão "By Ingredient" a tela vai para a rota correta', () => {
    const { history } = renderWithRouter(<ExploreFoodsAndDrinks />, ROTA);

    const btnByIngredient = screen.getByRole('button', { name: /by ingredient/i });
    expect(btnByIngredient).toBeInTheDocument();
    userEvent.click(btnByIngredient);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/explore/foods/ingredients');
  });

  it('Testa se ao clicar no botão "By Nationality" a tela vai para a rota correta',
    () => {
      const { history } = renderWithRouter(<ExploreFoodsAndDrinks />, ROTA);

      const btnByNationality = screen.getByRole('button', { name: /by nationality/i });
      expect(btnByNationality).toBeInTheDocument();
      userEvent.click(btnByNationality);

      const { location: { pathname } } = history;
      expect(pathname).toBe('/explore/foods/nationalities');
    });

  // it('Testa se ao clicar no botão "Surprise me!" a tela vai para a rota correta',
  //   async () => {
  //     jest.spyOn(global, 'fetch').mockResolvedValue({
  //       json: jest.fn().mockResolvedValue(oneMeals),
  //     });
  //     const { history } = renderWithRouter(<ExploreFoodsAndDrinks />, ROTA);
  //     const [id] = oneMeals.meals;

  //     const btnSurprise = screen.getByRole('button', { name: /surprise me!/i });
  //     expect(btnSurprise).toBeInTheDocument();
  //     userEvent.click(btnSurprise);

  //     const { location: { pathname } } = history;
  //     await waitFor(() => expect(pathname).toBe(`/foods/${id.idMeal}`));
  //   });
});

describe('Verifica funcionalidades da página ExploreFoodsAndDrinks na rota Drink', () => {
  it('Testa se existem 3 botões ao renderizar a página em drink', () => {
    renderWithRouter(<ExploreFoodsAndDrinks />, ROTADRINK);

    const btnByIngredient = screen.getByRole('button', { name: /by ingredient/i });
    const btnSurprise = screen.getByRole('button', { name: /surprise me!/i });

    expect(btnByIngredient).toBeInTheDocument();
    expect(btnSurprise).toBeInTheDocument();
  });

  it('Testa se ao clicar no botão "By Ingredient" a tela vai para a rota correta', () => {
    const { history } = renderWithRouter(<ExploreFoodsAndDrinks />, ROTADRINK);

    const btnByIngredient = screen.getByRole('button', { name: /by ingredient/i });
    expect(btnByIngredient).toBeInTheDocument();
    userEvent.click(btnByIngredient);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/explore/drinks/ingredients');
  });

  // it('Testa se ao clicar no botão "Surprise me!" a tela vai para a rota correta',
  //   async () => {
  //     jest.spyOn(global, 'fetch').mockResolvedValue({
  //       json: jest.fn().mockResolvedValue(oneDrinks),
  //     });
  //     const { history } = renderWithRouter(<ExploreFoodsAndDrinks />, ROTA);
  //     const [id] = oneDrinks.drinks;

  //     const btnSurprise = screen.getByRole('button', { name: /surprise me!/i });
  //     expect(btnSurprise).toBeInTheDocument();
  //     userEvent.click(btnSurprise);

  //     const { location: { pathname } } = history;
  //     await waitFor(() => expect(pathname).toBe(`/foods/${id.idDrink}`));
  //   });
});
