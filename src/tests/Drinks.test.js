import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import fetchMocksDrinks from './helpers/mocks/MockDrinks/fetchMockDrinks';

const drinksAll = require('./helpers/mocks/MockDrinks/drinksAll');
const lemonIngredients = require('./helpers/mocks/MockDrinks/lemonIngredients');
const ginName = require('./helpers/mocks/MockDrinks/ginName');
const firstLetterDrinks = require('./helpers/mocks/MockDrinks/firstLetterDrinks');
const ordinaryDrinks = require('./helpers/mocks/MockDrinks/ordinaryDrinks');
const cocktailDrinks = require('./helpers/mocks/MockDrinks/cocktailDrinks');
const shakeDrinks = require('./helpers/mocks/MockDrinks/shakeDrinks');
const otherDrinks = require('./helpers/mocks/MockDrinks/otherDrinks');
const cocoaDrinks = require('./helpers/mocks/MockDrinks/cocoaDrinks');

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

describe.only('Testa as funcionalidades da da página "/Drinks"',
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
        verifyCards(lemonIngredients);
      });

    it('Verifica se ao clicar no radio "Name" é filtrado corretamente', async () => {
      renderWithRouter(<App />, ROTA);

      verifyFilters('Name', 'gin');
      verifyCards(ginName);
    });

    it('Verifica se ao clicar no radio "First Letter" é filtrado corretamente',
      async () => {
        renderWithRouter(<App />, ROTA);

        verifyFilters('First letter', 'a');
        verifyCards(firstLetterDrinks);
      });

    it('Verifica se existe 6 botões de filtro', async () => {
      const { debug } = renderWithRouter(<App />, ROTA);

      const allBtn = await screen.findByText(/all/i);
      const ordinaryBtn = await screen.findByText(/ordinary drink/i);
      const cocktailBtn = await screen.findByText(/cocktail/i);
      const shakeBtn = await screen.findByText(/shake/i);
      const otherBtn = await screen.findByText(/other/i);
      const cocoaBtn = await screen.findByText(/cocoa/i);
      debug();
      expect(allBtn).toBeInTheDocument();
      expect(ordinaryBtn).toBeInTheDocument();
      expect(cocktailBtn).toBeInTheDocument();
      expect(shakeBtn).toBeInTheDocument();
      expect(otherBtn).toBeInTheDocument();
      expect(cocoaBtn).toBeInTheDocument();
    });

    it('Verifica se existem os 12 cards na primeira renderização',
      async () => {
        renderWithRouter(<App />, ROTA);

        verifyCards(drinksAll);
      });

    it('Verifica se ao clicar no botão "Ordinary Drink" é renderizado corretamente',
      async () => {
        renderWithRouter(<App />, ROTA);

        const ordinaryBtn = await screen.findByTestId('Ordinary Drink-category-filter');
        expect(ordinaryBtn).toBeInTheDocument();

        userEvent.click(ordinaryBtn);

        verifyCards(ordinaryDrinks);
      });

    it('Verifica se ao clicar no botão "Cocktail" é renderizado os cards correspondetes',
      async () => {
        renderWithRouter(<App />, ROTA);

        const cocktailBtn = await screen.findByTestId('Cocktail-category-filter');
        expect(cocktailBtn).toBeInTheDocument();

        userEvent.click(cocktailBtn);

        verifyCards(cocktailDrinks);
      });

    it('Verifica se ao clicar no botão "Shake" é renderizado os cards dessa categoria',
      async () => {
        renderWithRouter(<App />, ROTA);

        const chickenBtn = await screen.findByTestId('Shake-category-filter');
        expect(chickenBtn).toBeInTheDocument();

        userEvent.click(chickenBtn);

        verifyCards(shakeDrinks);
      });

    it('Verifica se ao clicar no botão "Other" é renderizado os cards dessa categoria',
      async () => {
        renderWithRouter(<App />, ROTA);

        const otherBtn = await screen.findByTestId('Other-category-filter');
        expect(otherBtn).toBeInTheDocument();

        userEvent.click(otherBtn);

        verifyCards(otherDrinks);
      });

    it('Verifica se ao clicar no botão "Cocoa" é renderizado os cards dessa categoria',
      async () => {
        renderWithRouter(<App />, ROTA);

        const cocoaBtn = await screen.findByTestId('Cocoa-category-filter');
        expect(cocoaBtn).toBeInTheDocument();

        userEvent.click(cocoaBtn);

        verifyCards(cocoaDrinks);
      });

    it('Verifica se ao clicar no botão "All" é renderizado sem filtros',
      async () => {
        renderWithRouter(<App />, ROTA);

        const allBtn = await screen.findByText(/all/i);
        expect(allBtn).toBeInTheDocument();

        userEvent.click(allBtn);

        verifyCards(drinksAll);
      });
  });
