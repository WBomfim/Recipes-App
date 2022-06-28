import React, { useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import { getDoneRecipes } from '../helpers/storageDoneRecipes';

function FilterBarStorage() {
  const { setExibitionRevenues } = useContext(RevenuesContext);

  const filterAll = () => {
    const recipes = getDoneRecipes();
    setExibitionRevenues([...recipes]);
  };

  const filterFood = () => {
    const doneRecipes = getDoneRecipes();
    const filterRevenuesType = doneRecipes.filter((recipe) => recipe.type === 'food');
    setExibitionRevenues([...filterRevenuesType]);
  };

  const filterDrink = () => {
    const doneRecipes = getDoneRecipes();
    const filterRevenuesType = doneRecipes.filter((recipe) => recipe.type === 'drink');
    setExibitionRevenues([...filterRevenuesType]);
  };

  return (
    <div>
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
    </div>
  );
}

export default FilterBarStorage;
