import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import FoodContext from '../context/FoodContext';
import DrinkContext from '../context/DrinkContext';
import * as fetchFoods from '../services/fetchFoods';
import * as fetchDrinks from '../services/fetchDrinks';

function SearchBar() {
  const { setDataFoods, setExibitionFoods } = useContext(FoodContext);
  const { setDataDrinks, setExibitionDrinks } = useContext(DrinkContext);
  const [searchOptions, setSearchOptions] = useState('');
  const location = useLocation().pathname;
  const searchValue = 'lemon';

  const handleChangeRadios = ({ target }) => {
    setSearchOptions(target.value);
  };

  const getDataByIngredients = async () => {
    if (location === '/foods') {
      const data = await fetchFoods.getFoodsIngredients(searchValue);
      setDataFoods(data);
      setExibitionFoods(data);
    }

    if (location === '/drinks') {
      const data = await fetchDrinks.getDrinksIngredients(searchValue);
      console.log(data);
      setDataDrinks(data);
      setExibitionDrinks(data);
    }
  };

  const getDataByName = async () => {
    if (location === '/foods') {
      const data = await fetchFoods.getFoodsName(searchValue);
      setDataFoods(data);
      setExibitionFoods(data);
    }

    if (location === '/drinks') {
      const data = await fetchDrinks.getDrinksName(searchValue);
      setDataDrinks(data);
      setExibitionDrinks(data);
    }
  };

  const getDataByFirstLetter = async () => {
    if (location === '/foods') {
      const data = await fetchFoods.getFoodsFirstLetter(searchValue);
      setDataFoods(data);
      setExibitionFoods(data);
    }

    if (location === '/drinks') {
      const data = await fetchDrinks.getDrinksFirstLetter(searchValue);
      setDataDrinks(data);
      setExibitionDrinks(data);
    }
  };

  const getSelectData = async () => {
    if (searchOptions === 'ingredients') {
      getDataByIngredients();
    }

    if (searchOptions === 'name') {
      getDataByName();
    }

    if (searchOptions === 'first-letter') {
      if (searchValue.length !== 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        getDataByFirstLetter();
      }
    }
  };

  return (
    <section>
      <div>
        <label htmlFor="ingredients">
          <input
            id="ingredients"
            name="search-radio"
            type="radio"
            value="ingredients"
            checked={ searchOptions === 'ingredients' }
            onChange={ handleChangeRadios }
            data-testid="ingredient-search-radio"
          />
          Ingredients
        </label>

        <label htmlFor="name">
          <input
            id="name"
            name="search-radio"
            type="radio"
            value="name"
            checked={ searchOptions === 'name' }
            onChange={ handleChangeRadios }
            data-testid="name-search-radio"
          />
          Name
        </label>

        <label htmlFor="first-letter">
          <input
            id="first-letter"
            name="search-radio"
            type="radio"
            value="first-letter"
            checked={ searchOptions === 'first-letter' }
            onChange={ handleChangeRadios }
            data-testid="first-letter-search-radio"
          />
          First letter
        </label>
      </div>
      <button
        type="button"
        onClick={ getSelectData }
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </section>
  );
}

export default SearchBar;
