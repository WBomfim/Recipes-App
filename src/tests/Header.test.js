import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const PAGE_TITLE = 'page-title';
const PROFILE_TOP_BTN = 'profile-top-btn';
const SEARCH_TOP_BTN = 'search-top-btn';
const SEARCH_BAR = 'search-input';

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
    const title = screen.queryByTestId(PAGE_TITLE);
    const iconProfile = screen.queryByTestId(PROFILE_TOP_BTN);
    const iconSearch = screen.queryByTestId(SEARCH_TOP_BTN);

    if (withIconSearch) {
      expect(title).toBeInTheDocument();
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
    renderWithRouter(<App />, '/');
    notHeader();
  });

  it('O header é renderizado na tela de comidas', () => {
    renderWithRouter(<App />, '/foods');
    withHeader(/Foods/i);
  });

  it('O header é renderizado na tela de principal de receitas de bebidas', () => {
    renderWithRouter(<App />, '/drinks');
    withHeader('Drinks');
  });

  it('Não tem header na tela de detalhes de uma receita de comida', () => {
    renderWithRouter(<App />, '/foods/0');
    notHeader();
  });

  it('Não tem header na tela de detalhes de uma receita de bebida', () => {
    renderWithRouter(<App />, '/drinks/1');
    notHeader();
  });

  it('Não tem header na tela de receita em progresso de comida', () => {
    renderWithRouter(<App />, '/foods/in-progress');
    notHeader();
  });

  it('Não tem header na tela de receita em progresso de bebida', () => {
    renderWithRouter(<App />, '/drinks/in-progress');
    notHeader();
  });

  it('O header tem os ícones corretos na tela de explorar', () => {
    renderWithRouter(<App />, '/explore');
    withHeader('Explore', false);
  });

  it('O header tem os ícones corretos na tela de explorar comidas', () => {
    renderWithRouter(<App />, '/explore/foods');
    withHeader('Explore Foods', false);
  });

  it('O header tem os ícones corretos na tela de explorar bebidas', () => {
    renderWithRouter(<App />, '/explore/drinks');
    withHeader('Explore Drinks', false);
  });

  it('O header tem os ícones corretos na tela de explorar comidas por ingrediente',
    () => {
      renderWithRouter(<App />, '/explore/foods/ingredients');
      withHeader('Explore Ingredients', false);
    });

  it('O header tem os ícones corretos na tela de explorar bebidas por ingrediente',
    () => {
      renderWithRouter(<App />, '/explore/drinks/ingredients');
      withHeader('Explore Ingredients', false);
    });

  it('O header tem os ícones corretos na tela de explorar comidas por nacionalidade',
    () => {
      renderWithRouter(<App />, '/explore/foods/nationalities');
      withHeader('Explore Nationalities', true);
    });

  it('O header tem os ícones corretos na tela de perfil', () => {
    renderWithRouter(<App />, '/profile');
    withHeader('Profile', false);
  });

  it('O header tem os ícones corretos na tela de receitas feitas', () => {
    renderWithRouter(<App />, '/done-recipes');
    withHeader('Done Recipes', false);
  });

  it('O header tem os ícones corretos na tela de receitas favoritas', () => {
    renderWithRouter(<App />, '/favorite-recipes');
    withHeader('Favorite Recipes', false);
  });
});

describe('Ao clicar no botão de perfil redireciona para tela de perfil', () => {
  it('Verifica se a mudança ocorre corretamente', () => {
    const { history } = renderWithRouter(<App />, '/foods');
    const iconProfile = screen.queryByTestId(PROFILE_TOP_BTN);
    userEvent.click(iconProfile);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/profile');
  });
});

describe('Verifica se a barra de busca é habilitada ou desabilitada ao ser clicada',
  () => {
    it('Verifica se a barra de busca está habilitada', () => {
      renderWithRouter(<App />, '/foods');

      const inconSearch = screen.getByTestId(SEARCH_TOP_BTN);
      userEvent.click(inconSearch);

      const searchBar = screen.getByTestId(SEARCH_BAR);
      expect(searchBar).toBeInTheDocument();
      userEvent.click(inconSearch);
      expect(searchBar).not.toBeInTheDocument();
    });
  });
