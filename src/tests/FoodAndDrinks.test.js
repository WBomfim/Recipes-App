import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FoodsAndDrinks from '../pages/FoodsAndDrinks';
import chickenMeals from './helpers/mocks/chickenMealsIngredients';
import soupMeals from './helpers/mocks/soupMealsIngredients';
import firstLetterMeals from './helpers/mocks/firstLetterMeals';

const fetchAllMeals = require('./helpers/mocks/fetchAllMeals');
const categoriesList = require('./helpers/mocks/fetchACategoriesList');

const verifyFilters = (param, change) => {
  const radio = screen.getByText(param);
  const search = screen.getByTestId(/exec-search-btn/i);
  const buttonSearchTop = screen.getByTestId(/search-top-btn/i);

  expect(radio).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(buttonSearchTop).toBeInTheDocument();

  userEvent.click(ingredients);
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

describe('Testa as funcionalidades da barra de pesquisa da rota "/foods"',
  () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Verifica se existe os inputs da barra de busca de comidas', () => {
      renderWithRouter(<FoodsAndDrinks />, '/foods');

      const ingredients = screen.getByText(/ingredients/i);
      const name = screen.getByText(/name/i);
      const firstLetter = screen.getByText(/first letter/i);

      expect(ingredients).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(firstLetter).toBeInTheDocument();
    });

    it('Verifica se ao clicar no radio "Ingredients" é filtrado corretamente',
      async () => {
        const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(chickenMeals),
        });
        renderWithRouter(<FoodsAndDrinks />, '/foods');

        verifyFilters('Ingredients', 'Chicken');
        verifyCards(chickenMeals);

        expect(fetchMock).toHaveBeenCalled();
        expect(fetchMock).toHaveBeenCalledTimes(2);
      });

    it('Verifica se ao clicar no radio "Name" é filtrado corretamente', async () => {
      const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(soupMeals),
      });

      renderWithRouter(<FoodsAndDrinks />, '/foods');

      verifyFilters('Name', 'soup');
      verifyCards(soupMeals);

      expect(fetchMock).toHaveBeenCalled();
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('Verifica se ao clicar no radio "First Letter" é filtrado corretamente',
      async () => {
        const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(firstLetterMeals),
        });
        renderWithRouter(<FoodsAndDrinks />, '/foods');

        verifyFilters('First letter', 'a');
        verifyCards(firstLetterMeals);

        expect(fetchMock).toHaveBeenCalled();
        expect(fetchMock).toHaveBeenCalledTimes(1);
      });

    it('Verifica se existe 6 botões de filtro', async () => {
      const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(categoriesList),
      });
      renderWithRouter(<FoodsAndDrinks />, '/foods');

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

      expect(fetchMock).toHaveBeenCalled();
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });
  });

//     it('Verifica se é feita a requisição para API na primeira vez',
//       async () => {
//         // eslint-disable-next-line no-unused-vars
//         const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
//           json: jest.fn().mockResolvedValue(fetchAllMeals),
//         });
//         // const fetchMockCategories = jest.spyOn(global, 'fetch').mockResolvedValue({
//         //   json: jest.fn().mockResolvedValue(categoriesList),
//         // });
//         renderWithRouter(<FoodsAndDrinks />, '/foods');

//         verifyCards(fetchAllMeals);
//       });
//   });

// it('Verifica se são renderizados 12 cards com imagem e nome das 12 primeiras comidas',
//   () => {

//   });

// it('Verifica se ao clicar no botão "Beef" é renderizado os cards dessa categoria',
//   () => {

//   });

// it('Verifica se ao clicar no botão "Breakfast" é renderizado os cards dessa categoria',
//   () => {

//   });

// it('Verifica se ao clicar no botão "Chicken" é renderizado os cards dessa categoria',
//   () => {

//   });

// it('Verifica se ao clicar no botão "Dessert" é renderizado os cards dessa categoria',
//   () => {

//   });

// it('Verifica se ao clicar no botão "Goat" é renderizado os cards dessa categoria',
//   () => {

//   });

// it('Verifica se ao clicar no botão "All" é renderizado sem filtros',
//   () => {

//   });
// });

// describe('Verifica funcionalidades da página principal de comidas e bebidas', () => {
//   it('Verifica se é feita a requisição para API', () => {
//     expect(fetchMock).toHaveBeenCalled();
//     expect(fetchMock).toHaveBeenCalledTimes(1);
//   });

//   it('Verifica se existe 6 botões de filtro', () => {

//   });

//   it('Verifica se são renderizados 12 cards com imagem e nome das 12 primeiras comidas',
//     () => {

//     });

//   it('Verifica se ao clicar no botão "Beef" é renderizado os cards dessa categoria',
//     () => {

//     });

//   it('Verifica se ao clicar no botão "Breakfast" é renderizado os cards dessa categoria',
//     () => {

//     });

//   it('Verifica se ao clicar no botão "Chicken" é renderizado os cards dessa categoria',
//     () => {

//     });

//   it('Verifica se ao clicar no botão "Dessert" é renderizado os cards dessa categoria',
//     () => {

//     });

//   it('Verifica se ao clicar no botão "Goat" é renderizado os cards dessa categoria',
//     () => {

//     });

//   it('Verifica se ao clicar no botão "All" é renderizado sem filtros',
//     () => {

//     });
// });
