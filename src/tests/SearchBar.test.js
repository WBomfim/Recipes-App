import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import SearchBar from '../components/SearchBar';

describe('13- Verifica a barra de busca', () => {
  it('A barra de busca deve possuir o data-testid="search-input"', () => {
    renderWithRouter(<SearchBar />);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('O radio button deve possuir data-testid="ingredient-search-radio"', () => {
    renderWithRouter(<SearchBar />);
    const radioButton = screen.getByTestId('ingredient-search-radio');
    expect(radioButton).toBeInTheDocument();
  });

  it('O radio button de busca por nome deve possuir o data-testid="name-search-radio"',
    () => {
      renderWithRouter(<SearchBar />);
      const radioButton = screen.getByTestId('name-search-radio');
      expect(radioButton).toBeInTheDocument();
    });

  it('O radio button possuir o atributo data-testid="first-letter-search-radio"',
    () => {
      renderWithRouter(<SearchBar />);
      const radioButton = screen.getByTestId('first-letter-search-radio');
      expect(radioButton).toBeInTheDocument();
    });

  it('O botão de busca deve possuir o atributo data-testid="exec-search-btn"',
    () => {
      renderWithRouter(<SearchBar />);
      const button = screen.getByTestId('exec-search-btn');
      expect(button).toBeInTheDocument();
    });
});
