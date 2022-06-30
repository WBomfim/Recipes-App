import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import fetchMocksDrinks from './helpers/mocks/MockFoods/fetchMocksMeals';

const ROTA = '/drinks';

const verifyFilters = (radio, change) => {
  const inputRadio = screen.getByText(radio);
  const search = screen.getByText(/search/i);
  const buttonSearchTop = screen.getByTestId(/search-top-btn/i);

  expect(inputRadio).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(buttonSearchTop).toBeInTheDocument();

  userEvent.click(inputRadio);
  userEvent.click(buttonSearchTop);

  const inputSearch = screen.getByPlaceholderText(/search/i);
  expect(inputSearch).toBeInTheDocument();

  userEvent.type(inputSearch, change);
  userEvent.click(search);
};

const verifyCards = (fetch) => {
  fetch.drinks.forEach(async (revenue, index) => {
    const card = await screen.findByTestId(`${index}-recipe-card`);
    const img = await screen.findByTestId(`${index}-card-img`);
    const name = await screen
      .findByRole('heading', { level: 3, name: revenue.strDrink });

    expect(card).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(img).toHaveAttribute('src', revenue.strDrinkThumb);
  });
};

describe('Testa as funcionalidades da da página "/Drinks"',
  () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockImplementation(fetchMocksDrinks);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Verifica se existe os inputs da barra de busca de drinks', () => {
      renderWithRouter(<App />, ROTA);

      const ingredients = screen.getByText(/ingredients/i);
      const name = screen.getByText(/name/i);
      const firstLetter = screen.getByText(/first letter/i);

      expect(ingredients).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(firstLetter).toBeInTheDocument();
    });

    it('Verifica se ao clicar no radio "Ingredients" é filtrado corretamente',
      async () => {
        renderWithRouter(<App />, ROTA);

        verifyFilters('Ingredients', 'lemon');
        verifyCards(chickenIngredients);
      });

    it('Verifica se ao clicar no radio "Name" é filtrado corretamente', async () => {
      renderWithRouter(<App />, ROTA);

      verifyFilters('Name', 'gin');
      verifyCards(soupIngredients);
    });

    it('Verifica se ao clicar no radio "First Letter" é filtrado corretamente',
      async () => {
        renderWithRouter(<App />, ROTA);

        verifyFilters('First letter', 'a');
        verifyCards(firstLetterMeals);
      });

    it('Verifica se existe 6 botões de filtro', async () => {
      renderWithRouter(<App />, ROTA);

      const allBtn = await screen.findByText(/all/i);
      const beefBtn = screen.findByText(/beef/i);
      const breakfastBtn = screen.findByText(/breakfast/i);
      const chickenBtn = screen.findByText(/chicken/i);
      const dessertBtn = screen.findByText(/dessert/i);
      const goatBtn = screen.findByText(/goat/i);

      expect(allBtn).toBeInTheDocument();
      expect(beefBtn).toBeInTheDocument();
      expect(breakfastBtn).toBeInTheDocument();
      expect(chickenBtn).toBeInTheDocument();
      expect(dessertBtn).toBeInTheDocument();
      expect(goatBtn).toBeInTheDocument();
    });

    it.only('Verifica se existem os 12 cards na primeira renderização',
      async () => {
        renderWithRouter(<App />, ROTA);

        verifyCards(drinksAll);
      });

    it('Verifica se ao clicar no botão "Ordinary Drink" é renderizado corretamente',
      async () => {
        renderWithRouter(<App />, ROTA);

        const ordinaryBtn = await screen.findByTestId('ordinary-category-filter');
        expect(ordinaryBtn).toBeInTheDocument();

        userEvent.click(ordinaryBtn);

        verifyCards(ordinaryDrink);
      });

    it('Verifica se ao clicar no botão "Breakfast" é renderizado os cards correspondetes',
      async () => {
        renderWithRouter(<App />, ROTA);

        const breakfastBtn = await screen.findByTestId('Breakfast-category-filter');
        expect(breakfastBtn).toBeInTheDocument();

        userEvent.click(breakfastBtn);

        verifyCards(breakfast);
      });

    it('Verifica se ao clicar no botão "Chicken" é renderizado os cards dessa categoria',
      async () => {
        renderWithRouter(<App />, ROTA);

        const chickenBtn = await screen.findByTestId('Chicken-category-filter');
        expect(chickenBtn).toBeInTheDocument();

        userEvent.click(chickenBtn);

        verifyCards(chickenMeals);
      });

    it('Verifica se ao clicar no botão "Dessert" é renderizado os cards dessa categoria',
      async () => {
        renderWithRouter(<App />, ROTA);

        const dessertBtn = await screen.findByTestId('Dessert-category-filter');
        expect(dessertBtn).toBeInTheDocument();

        userEvent.click(dessertBtn);

        verifyCards(dessert);
      });

    it('Verifica se ao clicar no botão "Goat" é renderizado os cards dessa categoria',
      async () => {
        renderWithRouter(<App />, ROTA);

        const goatBtn = await screen.findByTestId('Goat-category-filter');
        expect(goatBtn).toBeInTheDocument();

        userEvent.click(goatBtn);

        verifyCards(goat);
      });

    it('Verifica se ao clicar no botão "All" é renderizado sem filtros',
      async () => {
        renderWithRouter(<App />, ROTA);

        const allBtn = await screen.findByText(/all/i);
        expect(allBtn).toBeInTheDocument();

        userEvent.click(allBtn);

        verifyCards(mealsAll);
      });
  });
