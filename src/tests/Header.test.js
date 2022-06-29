import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import FoodAndDrinkInProgress from '../pages/FoodAndDrinkInProgress';
import FoodAndDrinkDetail from '../pages/FoodAndDrinkDetail';
import DoneAndFavoriteRecipes from '../pages/DoneAndFavoriteRecipes';
import ExploreFoodsAndDrinks from '../pages/ExploreFoodsAndDrinks';
import ExploreFoodDrinkIngredients from '../pages/ExploreFoodDrinkIngredients';
import ExploreFoodNationalities from '../pages/ExploreFoodNationalities';
// import ExploreFoodIngredients from '../pages/ExploreFoodIngredients';
import Explore from '../pages/Explore';
import FoodsAndDrinks from '../pages/FoodsAndDrinks';

const PAGE_TITLE = 'page-title';
const PROFILE_TOP_BTN = 'profile-top-btn';
const SEARCH_TOP_BTN = 'search-top-btn';

describe('9- Verifica se header possui `profile-top-btn`, `page-title`, `search-top-btn`',
  () => {
    it('Verifica se possui os data-testids', () => {
      renderWithRouter(<FoodsAndDrinks />);
      const title = screen.getByTestId('page-title');
      const iconProfile = screen.getByTestId('profile-top-btn');
      const iconSearch = screen.getByTestId('search-top-btn');

      expect(title).toBeInTheDocument();
      expect(iconProfile).toBeInTheDocument();
      expect(iconSearch).toBeInTheDocument();
    });
  });

describe('Verifica a renderização do componente Header', () => {
  const notHeader = () => {
    const title = screen.queryByTestId(PAGE_TITLE);
    const iconProfile = screen.queryByTestId(PROFILE_TOP_BTN);
    const iconSearch = screen.queryByTestId(SEARCH_TOP_BTN);

    expect(title).not.toBeInTheDocument();
    expect(iconProfile).not.toBeInTheDocument();
    expect(iconSearch).not.toBeInTheDocument();
  };

  const withHeader = (titulo, withIconSearch = true) => {
    const title = screen.getByTestId(PAGE_TITLE);
    const iconProfile = screen.getByTestId(PROFILE_TOP_BTN);
    const iconSearch = screen.getByTestId(SEARCH_TOP_BTN);

    if (withIconSearch) {
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(titulo);
      expect(iconProfile).toBeInTheDocument();
      expect(iconSearch).toBeInTheDocument();
    } else {
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(titulo);
      expect(iconProfile).toBeInTheDocument();
      expect(iconSearch).not.toBeInTheDocument();
    }
  };

  it('Não tem header na tela de login', () => {
    renderWithRouter(<Login />);
    notHeader();
  });

  it('O header é renderizado na tela de comidas', () => {
    renderWithRouter(<FoodsAndDrinks />);
    withHeader('Foods and Drinks');
  });

  it('O header é renderizado na tela de principal de receitas de bebidas', () => {
    renderWithRouter(<FoodAndDrinkDetail />);
    withHeader('Drinks');
  });

  it('Não tem header na tela de detalhes de uma receita de comida', () => {
    renderWithRouter(<FoodAndDrinkDetail />);
    notHeader();
  });

  it('Não tem header na tela de detalhes de uma receita de bebida', () => {
    renderWithRouter(<FoodAndDrinkDetail />);
    notHeader();
  });

  it('Não tem header na tela de receita em progresso de comida', () => {
    renderWithRouter(<FoodAndDrinkInProgress />);
    notHeader();
  });

  it('Não tem header na tela de receita em progresso de bebida', () => {
    renderWithRouter(<FoodAndDrinkInProgress />);
    notHeader();
  });

  it('O header tem os ícones corretos na tela de explorar', () => {
    renderWithRouter(<Explore />);
    withHeader('Explore', false);
  });

  it('O header tem os ícones corretos na tela de explorar comidas', () => {
    renderWithRouter(<ExploreFoodsAndDrinks />);
    withHeader('Explore Foods', false);
  });

  it('O header tem os ícones corretos na tela de explorar bebidas', () => {
    renderWithRouter(<ExploreFoodsAndDrinks />);
    withHeader('Explore Drinks', false);
  });

  it('O header tem os ícones corretos na tela de explorar comidas por ingrediente',
    () => {
      renderWithRouter(<ExploreFoodDrinkIngredients />);
      withHeader('Explore Ingredients', false);
    });

  it('O header tem os ícones corretos na tela de explorar bebidas por ingrediente',
    () => {
      renderWithRouter(<ExploreFoodDrinkIngredients />);
      withHeader('Explore Ingredients', false);
    });

  it('O header tem os ícones corretos na tela de explorar comidas por nacionalidade',
    () => {
      renderWithRouter(<ExploreFoodNationalities />);
      withHeader('Explore Nationalities', false);
    });

  it('O header tem os ícones corretos na tela de perfil', () => {
    renderWithRouter(<Profile />);
    withHeader('Profile', false);
  });

  it('O header tem os ícones corretos na tela de receitas feitas', () => {
    renderWithRouter(<DoneAndFavoriteRecipes />);
    withHeader('Done Recipes', false);
  });

  it('O header tem os ícones corretos na tela de receitas favoritas', () => {
    renderWithRouter(<DoneAndFavoriteRecipes />);
    withHeader('Favorite Recipes', false);
  });
});

describe('Ao clicar no botão de perfil redireciona para tela de perfil', () => {
  it('Verifica se a mudança ocorre corretamente', () => {
    const { history } = renderWithRouter(<FoodsAndDrinks />);
    const iconProfile = screen.queryByTestId(PROFILE_TOP_BTN);
    userEvent.click(iconProfile);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/profile');
  });
});

describe('Verifica se a barra de busca é habilitada ou desabilitada ao ser clicada',
  () => {
    it('Verifica se a barra de busca está habilitada', () => {
      renderWithRouter(<FoodsAndDrinks />);

      const inconSearch = screen.queryByTestId(SEARCH_TOP_BTN);
      userEvent.click(inconSearch);

      const searchBar = screen.getByTestId('search-bar');
      expect(searchBar).toBeInTheDocument();
      userEvent.click(inconSearch);
      expect(searchBar).not.toBeInTheDocument();
    });
  });
