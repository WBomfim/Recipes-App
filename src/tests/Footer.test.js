import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../components/Footer';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';
import FoodsAndDrinks from '../pages/FoodsAndDrinks';
import FoodAndDrinkDetail from '../pages/FoodAndDrinkDetail';
import FoodAndDrinkInProgress from '../pages/FoodAndDrinkInProgress';
import Explore from '../pages/Explore';
import ExploreFoodsAndDrinks from '../pages/ExploreFoodsAndDrinks';
import ExploreFoodDrinkIngredients from '../pages/ExploreFoodDrinkIngredients';
import ExploreFoodNationalities from '../pages/ExploreFoodNationalities';
import Profile from '../pages/Profile';
import DoneAndFavoriteRecipes from '../pages/DoneAndFavoriteRecipes';

describe('19- Implemente os elementos do menu inferior', () => {
  it('O menu inferior deve possuir data-testid="footer"', () => {
    renderWithRouter(<Footer />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O elemento página de bebidas possui data-testid="drinks-bottom-btn"', () => {
    renderWithRouter(<Footer />);
    const iconDrinks = screen.getByTestId('drinks-bottom-btn');
    expect(iconDrinks).toBeInTheDocument();
  });

  it('O elemento página de explorar possui data-testid="explore-bottom-btn""', () => {
    renderWithRouter(<Footer />);
    const iconExplore = screen.getByTestId('explore-bottom-btn');
    expect(iconExplore).toBeInTheDocument();
  });

  it('O elemento página de comidas possui data-testid="food-bottom-btn"', () => {
    renderWithRouter(<Footer />);
    const iconFoods = screen.getByTestId('food-bottom-btn');
    expect(iconFoods).toBeInTheDocument();
  });
});

describe('21-verifica se o footer renderiza corretamente', () => {
  const notFooter = () => {
    const footer = screen.queryByTestId('footer');

    expect(footer).not.toBeInTheDocument();
  };

  it('Não tem footer na tela de login', () => {
    renderWithRouter(<Login />);
    notFooter();
  });

  it('Tem footer na tela de principal de receitas de bebidas e comidas', () => {
    renderWithRouter(<FoodsAndDrinks />);
    const footerDrinksPage = screen.getByTestId('footer');
    expect(footerDrinksPage).toBeInTheDocument();
  });

  it('Não tem footer na tela de detalhes de uma receita de comida', () => {
    renderWithRouter(<FoodAndDrinkDetail />);
    notFooter();
  });

  it('Não tem footer na tela de detalhes de uma receita de bebida', () => {
    renderWithRouter(<FoodAndDrinkDetail />);
    notFooter();
  });

  it('Não tem footer na tela de receita em progresso de comida', () => {
    renderWithRouter(<FoodAndDrinkInProgress />);
    notFooter();
  });

  it('Não tem footer na tela de receita em progresso de bebida', () => {
    renderWithRouter(<FoodAndDrinkInProgress />);
    notFooter();
  });

  it('Tem footer na tela de explorar', () => {
    renderWithRouter(<Explore />);
    const footerExplorePage = screen.getByTestId('footer');
    expect(footerExplorePage).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar comidas', () => {
    renderWithRouter(<ExploreFoodsAndDrinks />);
    const footerExploreFoods = screen.getByTestId('footer');
    expect(footerExploreFoods).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar bebidas', () => {
    renderWithRouter(<ExploreFoodsAndDrinks />);
    const footerExploreDrinks = screen.getByTestId('footer');
    expect(footerExploreDrinks).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar comidas por ingrediente', () => {
    renderWithRouter(<ExploreFoodDrinkIngredients />);
    const footerExploreFoods = screen.getByTestId('footer');
    expect(footerExploreFoods).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar bebidas por ingrediente', () => {
    renderWithRouter(<ExploreFoodDrinkIngredients />);
    const footerExploreDrinks = screen.getByTestId('footer');
    expect(footerExploreDrinks).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar comidas por nacionalidade', () => {
    renderWithRouter(<ExploreFoodNationalities />);
    const footerFoods = screen.getByTestId('footer');
    expect(footerFoods).toBeInTheDocument();
  });

  it('Tem footer na tela de perfil', () => {
    renderWithRouter(<Profile />);
    const footerProfilePage = screen.getByTestId('footer');
    expect(footerProfilePage).toBeInTheDocument();
  });

  it('Não tem footer na tela de receitas feitas', () => {
    renderWithRouter(<DoneAndFavoriteRecipes />);
    notFooter();
  });

  it('Não tem footer na tela de receitas favorita', () => {
    renderWithRouter(<DoneAndFavoriteRecipes />);
    notFooter();
  });
});

describe(
  '22- Redirecione a pessoa usuária para cocktails ao clicar no ícone de bebidas', () => {
    it('Redireciona o usuário para a rota correta', () => {
      const { history } = renderWithRouter(<Footer />);
      const iconDrinks = screen.getByTestId('drinks-bottom-btn');
      userEvent.click(iconDrinks);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/drinks');
    });
  },
);

describe(
  '23- Redirecione o usuária para cocktails ao clicar no ícone de exploração', () => {
    it('Redireciona para a rota correta', () => {
      const { history } = renderWithRouter(<Footer />);
      const iconExplore = screen.getByTestId('explore-bottom-btn');
      userEvent.click(iconExplore);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/explore');
    });
  },
);

describe(
  '24-Redirecione o usuário para a lista de comidas ao clicar no ícone de comida', () => {
    it('Redireciona para a rota correta', () => {
      const { history } = renderWithRouter(<Footer />);
      const iconFoods = screen.getByTestId('food-bottom-btn');
      userEvent.click(iconFoods);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/foods');
    });
  },
);
