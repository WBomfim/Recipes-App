import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import { getDoneRecipes } from '../helpers/storageDoneRecipes';
import { getFavoriteRecipes } from '../helpers/storageFavorited';
import '../styles/FilterBarStorage.css';

function FilterBarStorage() {
  const { setExibitionRevenues } = useContext(RevenuesContext);
  const location = useLocation().pathname.split('/')[1];
  const DONE_RECIPES = 'done-recipes';
  const FAVORITE_RECIPES = 'favorite-recipes';

  const filterAll = () => {
    let recipes = [];
    if (location === DONE_RECIPES) {
      recipes = getDoneRecipes();
    }

    if (location === FAVORITE_RECIPES) {
      recipes = getFavoriteRecipes();
    }
    setExibitionRevenues([...recipes]);
  };

  const filterFood = () => {
    let recipes = [];
    if (location === DONE_RECIPES) {
      const doneRecipes = getDoneRecipes();
      recipes = doneRecipes.filter((recipe) => recipe.type === 'food');
    }

    if (location === FAVORITE_RECIPES) {
      const favoriteRecipes = getFavoriteRecipes();
      recipes = favoriteRecipes.filter((recipe) => recipe.type === 'food');
    }
    setExibitionRevenues([...recipes]);
  };

  const filterDrink = () => {
    let recipes = [];
    if (location === DONE_RECIPES) {
      const doneRecipes = getDoneRecipes();
      recipes = doneRecipes.filter((recipe) => recipe.type === 'drink');
    }

    if (location === FAVORITE_RECIPES) {
      const favoriteRecipes = getFavoriteRecipes();
      recipes = favoriteRecipes.filter((recipe) => recipe.type === 'drink');
    }
    setExibitionRevenues([...recipes]);
  };

  return (
    <section className="filter-buttons-storage">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ filterAll }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ filterFood }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ filterDrink }
      >
        Drink
      </button>
    </section>
  );
}

export default FilterBarStorage;
