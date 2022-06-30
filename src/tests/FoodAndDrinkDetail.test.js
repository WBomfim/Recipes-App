// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
// import FoodAndDrinkDetail from '../pages/FoodAndDrinkDetail';

// const oneMealsDetail = require('./helpers/mocks/oneMealsDetail');

// const ROTA_FOODS = '/foods/52882';
// // const ROTA_DRINKS = '/drinks/17256';

// describe('Verifica funcionalidades da página FoodAndDrink na rota foods', () => {
//   let fetchMock;
//   beforeEach(() => {
//     fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
//       json: jest.fn().mockResolvedValue({ oneMealsDetail }),
//     });
//   });
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('Verifica á chamada a API', async () => {
//     renderWithRouter(<FoodAndDrinkDetail />, ROTA_FOODS);

//     expect(fetchMock).toHaveBeenCalled();
//     expect(fetchMock).toHaveBeenCalledTimes(2);
//   });

//   it('Verifica a existencia dos elementos', async () => {
//     renderWithRouter(<FoodAndDrinkDetail />, ROTA_FOODS);

//     const img = await screen.findByRole('img', { alt: 'imagem-Three Fish Pie' });
//     const nameFood = await screen.findByRole('heading', { level: 1, name: /three fis/i });
//     const category = await screen.findByText(/seafood/i);
//     const buttonShare = await screen.findByTestId('share-btn');
//     const buttonFavorite = await screen.findByRole('button', {name: //i});

//     expect(button).toBeInTheDocument();
//     expect(category).toBeInTheDocument();
//     expect(nameFood).toBeInTheDocument();
//     expect(img).toBeInTheDocument();
//     expect(buttonShare).toBeInTheDocument();
//     expect(img).toBeInTheDocument();
//   });

//   it('Verifica a existencia dos elementos', async () => {
//     renderWithRouter(<FoodAndDrinkDetail />, ROTA_FOODS);

//     const img = await screen.findByRole('img', { alt: 'imagem-Three Fish Pie' });
//     const nameFood = await screen.findByRole('heading', { level: 1, name: /three fis/i });
//     const category = await screen.findByText(/seafood/i);
//     const button = await screen.findAllByRole('button');

//     expect(button).toBeInTheDocument();
//     expect(category).toBeInTheDocument();
//     expect(nameFood).toBeInTheDocument();
//     expect(img).toBeInTheDocument();
//     expect(fetchMock).toHaveBeenCalled();
//     expect(fetchMock).toHaveBeenCalledTimes(2);
//   });
// });
