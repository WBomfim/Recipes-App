import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import fetchMocks from './helpers/mocks/MockFoods/fetchMocksMeals';

const ROTA_FOODS = '/foods/52977';
// const ROTA_DRINKS = '/drinks/17256';

describe('Verifica funcionalidades da página FoodAndDrink na rota foods', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(fetchMocks);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Verifica a existencia da imagem, nome e categoria da comida e botões', async () => {
    renderWithRouter(<App />, ROTA_FOODS);

    const img = await screen.findByTestId('recipe-photo');
    const nameFood = await screen.findByRole('heading', { level: 1, name: /corba/i });
    const category = await screen.findByTestId('recipe-category');
    const buttonShare = await screen.findByTestId('share-btn');
    const buttonFavorite = await screen.findByTestId('favorite-btn');

    expect(img).toBeInTheDocument();
    expect(nameFood).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(buttonShare).toBeInTheDocument();
    expect(buttonFavorite).toBeInTheDocument();
  });

  it('Verifica a existencia dos titulos de ingredients e instruções', async () => {
    renderWithRouter(<App />, ROTA_FOODS);
    const ingredientsTitle = await screen
      .findByRole('heading', { level: 2, name: /ingredients/i });
    const instructionsTitle = await screen
      .findByRole('heading', { level: 2, name: /ingredients/i });

    expect(ingredientsTitle).toBeInTheDocument();
    expect(instructionsTitle).toBeInTheDocument();
  });

  it('Verifica a existencia do video, cards de recomendação e botão para inicar receita',
    async () => {
      renderWithRouter(<App />, ROTA_FOODS);

      const video = await screen.findByTestId('video');
      const recomendationCard = await screen.findByTestId('0-recomendation-card');
      const buttonDetails = await screen
        .findByTestId('start-recipe-btn');

      expect(video).toBeInTheDocument();
      expect(recomendationCard).toBeInTheDocument();
      expect(buttonDetails).toBeInTheDocument();
    });
});
