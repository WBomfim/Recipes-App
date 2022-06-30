import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FoodsAndDrinks from '../pages/FoodsAndDrinks';
import chickenMealsIngredients from './helpers/mocks/chickenMealsIngredients';

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

    // it('Verifica se existe os inputs da barra de busca de bebidas', () => {
    //   renderWithRouter(<FoodsAndDrinks />, '/drinks');

    //   const ingredients = screen.getByText(/ingredients/i);
    //   const name = screen.getByText(/name/i);
    //   const firstLetter = screen.getByText(/first letter/i);

    //   expect(ingredients).toBeInTheDocument();
    //   expect(name).toBeInTheDocument();
    //   expect(firstLetter).toBeInTheDocument();
    // });

    it.only('Verifica se ao clicar no radio "Ingredients" é filtrado corretamente',
      async () => {
        const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(chickenMealsIngredients),
        });
        renderWithRouter(<FoodsAndDrinks />, '/foods');
        const ingredients = screen.getByText(/ingredients/i);
        const search = screen.getByTestId(/exec-search-btn/i);
        const buttonSearchTop = screen.getByTestId(/search-top-btn/i);

        expect(ingredients).toBeInTheDocument();
        expect(search).toBeInTheDocument();
        expect(buttonSearchTop).toBeInTheDocument();

        userEvent.click(ingredients);
        userEvent.click(buttonSearchTop);

        const inputSearch = screen.getByPlaceholderText(/search/i);
        expect(inputSearch).toBeInTheDocument();

        userEvent.type(inputSearch, 'Chicken');
        userEvent.click(search);

        chickenMealsIngredients.meals.forEach(async (revenue, index) => {
          const card = await screen.findByTestId(`${index}-recipe-card`);
          const img = await screen.findByRole('img');
          const name = await screen
            .findByRole('heading', { level: 1, name: revenue.strMeal });

          expect(card).toBeInTheDocument();
          expect(img).toBeInTheDocument();
          expect(name).toBeInTheDocument();
          expect(img).toHaveAttribute('src', revenue.strMealThumb);
        });
        expect(fetchMock).toHaveBeenCalled();
        expect(fetchMock).toHaveBeenCalledTimes(2);
      });

    it('Verifica se ao clicar no radio "Name" é filtrado corretamente', () => {
      renderWithRouter(<FoodsAndDrinks />);
      const ingredients = screen.getByText(/ingredients/i);
      const name = screen.getByText(/name/i);
      const firstLetter = screen.getByText(/first letter/i);

      expect(ingredients).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(firstLetter).toBeInTheDocument();

      debug();
    });

    it('Verifica se ao clicar no radio "First Letter" é filtrado corretamente', () => {

    });
  });

describe('Verifica funcionalidades da página principal de comidas e bebidas', () => {
  it('Verifica se é feita a requisição para API', () => {
    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('Verifica se existe 6 botões de filtro', () => {

  });

  it('Verifica se são renderizados 12 cards com imagem e nome das 12 primeiras comidas',
    () => {

    });

  it('Verifica se ao clicar no botão "Beef" é renderizado os cards dessa categoria',
    () => {

    });

  it('Verifica se ao clicar no botão "Breakfast" é renderizado os cards dessa categoria',
    () => {

    });

  it('Verifica se ao clicar no botão "Chicken" é renderizado os cards dessa categoria',
    () => {

    });

  it('Verifica se ao clicar no botão "Dessert" é renderizado os cards dessa categoria',
    () => {

    });

  it('Verifica se ao clicar no botão "Goat" é renderizado os cards dessa categoria',
    () => {

    });

  it('Verifica se ao clicar no botão "All" é renderizado sem filtros',
    () => {

    });
});
