import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import fetchMocks from './helpers/mocks/MockFoods/fetchMocksMeals';

const mealsAll = require('./helpers/mocks/MockFoods/mealsAll');
const chickenIngredients = require('./helpers/mocks/MockFoods/chickenIngredients');
const soupName = require('./helpers/mocks/MockFoods/soupName');
const firstLetterMeals = require('./helpers/mocks/MockFoods/firstLetterMeals');
const beef = require('./helpers/mocks/MockFoods/beefMeals');
const breakfast = require('./helpers/mocks/MockFoods/breakfastMeals');
const chickenMeals = require('./helpers/mocks/MockFoods/chickenMeals');
const dessert = require('./helpers/mocks/MockFoods/dessert');
const goat = require('./helpers/mocks/MockFoods/goat');

const ROTA = '/foods';

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
  fetch.meals.forEach(async (revenue, index) => {
    const card = await screen.findByTestId(`${index}-recipe-card`);
    const img = await screen.findByTestId(`${index}-card-img`);
    const name = await screen
      .findByRole('heading', { level: 1, name: revenue.strMeal });

    expect(card).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(img).toHaveAttribute('src', revenue.strMealThumb);
  });
};

describe('Testa as funcionalidades da página "/Foods"',
  () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockImplementation(fetchMocks);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Verifica se existe os inputs da barra de busca de comidas', () => {
      renderWithRouter(<App />, ROTA);
      console.log(fetchMocks);
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

        verifyFilters('Ingredients', 'Chicken');
        verifyCards(chickenIngredients);
      });

    it('Verifica se ao clicar no radio "Name" é filtrado corretamente', async () => {
      renderWithRouter(<App />, ROTA);

      verifyFilters('Name', 'soup');
      verifyCards(soupName);
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
      const beefBtn = await screen.findByText(/beef/i);
      const breakfastBtn = await screen.findByText(/breakfast/i);
      const chickenBtn = await screen.findByText(/chicken/i);
      const dessertBtn = await screen.findByText(/dessert/i);
      const goatBtn = await screen.findByText(/goat/i);

      expect(allBtn).toBeInTheDocument();
      expect(beefBtn).toBeInTheDocument();
      expect(breakfastBtn).toBeInTheDocument();
      expect(chickenBtn).toBeInTheDocument();
      expect(dessertBtn).toBeInTheDocument();
      expect(goatBtn).toBeInTheDocument();
    });

    it('Verifica se existem os 12 cards na primeira renderização',
      async () => {
        renderWithRouter(<App />, ROTA);

        verifyCards(mealsAll);
      });

    it('Verifica se ao clicar no botão "Beef" é renderizado os cards dessa categoria',
      async () => {
        renderWithRouter(<App />, ROTA);

        const beefBtn = await screen.findByTestId('Beef-category-filter');
        expect(beefBtn).toBeInTheDocument();

        userEvent.click(beefBtn);

        verifyCards(beef);
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
