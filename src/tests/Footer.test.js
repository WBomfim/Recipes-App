import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../components/Footer';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('19- Implemente os elementos do menu inferior', () => {
  it('O menu inferior deve possuir data-testid="footer"', () => {
    renderWithRouter(<App />, '/foods');
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O elemento página de bebidas possui data-testid="drinks-bottom-btn"', () => {
    renderWithRouter(<App />, '/drinks');
    const iconDrinks = screen.getByTestId('drinks-bottom-btn');
    expect(iconDrinks).toBeInTheDocument();
  });

  it('O elemento página de explorar possui data-testid="explore-bottom-btn""', () => {
    renderWithRouter(<App />, '/explore');
    const iconExplore = screen.getByTestId('explore-bottom-btn');
    expect(iconExplore).toBeInTheDocument();
  });

  it('O elemento página de comidas possui data-testid="food-bottom-btn"', () => {
    renderWithRouter(<App />, '/foods');
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
    renderWithRouter(<App />, '/');
    notFooter();
  });

  it('Tem footer na tela de principal de receitas de bebidas e comidas', () => {
    renderWithRouter(<App />, '/drinks');
    const footerDrinksPage = screen.getByTestId('footer');
    expect(footerDrinksPage).toBeInTheDocument();
  });

  it('Não tem footer na tela de detalhes de uma receita de comida', () => {
    renderWithRouter(<App />, '/foods/0');
    notFooter();
  });

  it('Não tem footer na tela de detalhes de uma receita de bebida', () => {
    renderWithRouter(<App />, '/drinks/1');
    notFooter();
  });

  it('Não tem footer na tela de receita de comida em progresso', () => {
    renderWithRouter(<App />, '/foods/in-progress');
    notFooter();
  });

  it('Não tem footer na tela de receita de bebida em progresso', () => {
    renderWithRouter(<App />, '/drinks/in-progress');
    notFooter();
  });

  it('Tem footer na tela de explorar', () => {
    renderWithRouter(<App />, '/explore');
    const footerExplorePage = screen.getByTestId('footer');
    expect(footerExplorePage).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar comidas', () => {
    renderWithRouter(<App />, '/explore/foods');
    const footerExploreFoods = screen.getByTestId('footer');
    expect(footerExploreFoods).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar bebidas', () => {
    renderWithRouter(<App />, '/explore/drinks');
    const footerExploreDrinks = screen.getByTestId('footer');
    expect(footerExploreDrinks).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar comidas por ingrediente', () => {
    renderWithRouter(<App />, '/explore/foods/ingredients');
    const footerExploreFoods = screen.getByTestId('footer');
    expect(footerExploreFoods).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar bebidas por ingrediente', () => {
    renderWithRouter(<App />, '/explore/drinks/ingredients');
    const footerExploreDrinks = screen.getByTestId('footer');
    expect(footerExploreDrinks).toBeInTheDocument();
  });

  it('Tem footer na tela de explorar comidas por nacionalidade', () => {
    renderWithRouter(<App />, '/explore/foods/nationalities');
    const footerFoods = screen.getByTestId('footer');
    expect(footerFoods).toBeInTheDocument();
  });

  it('Tem footer na tela de perfil', () => {
    renderWithRouter(<App />, '/profile');
    const footerProfilePage = screen.getByTestId('footer');
    expect(footerProfilePage).toBeInTheDocument();
  });

  it('Não tem footer na tela de receitas feitas', () => {
    renderWithRouter(<App />, '/done-recipes');
    notFooter();
  });

  it('Não tem footer na tela de receitas favorita', () => {
    renderWithRouter(<App />, '/favorite-recipes');
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
