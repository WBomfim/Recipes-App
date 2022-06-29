import React, { useContext, useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import '../styles/SearchBar.css';

function SearchBar() {
  const {
    searchValue,
    searchOptions,
    setSearchOptions,
    exibitionRevenues,
    getDataByIngredients,
    getDataByName,
    getDataByFirstLetter,
    setCategorySelect,
    categorySelect,
  } = useContext(RevenuesContext);

  const location = useLocation().pathname.split('/')[1];
  const history = useHistory();
  const resetFilter = {
    type: '',
    category: '',
  };

  const handleChangeRadios = ({ target }) => {
    setSearchOptions(target.value);
  };

  const changeExibition = useCallback(() => {
    if (!exibitionRevenues) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else {
      if (exibitionRevenues.length === 1
        && location === 'foods'
        && categorySelect.category === '') {
        history.push(`/foods/${exibitionRevenues[0].idMeal}`);
      }

      if (exibitionRevenues.length === 1
        && location === 'drinks'
        && categorySelect.category === '') {
        history.push(`/drinks/${exibitionRevenues[0].idDrink}`);
      }
    }
  }, [exibitionRevenues, history, location, categorySelect]);

  useEffect(() => {
    changeExibition();
  }, [exibitionRevenues, changeExibition]);

  const getSelectData = () => {
    if (searchOptions === 'ingredients') {
      getDataByIngredients(location);
      changeExibition();
      setCategorySelect(resetFilter);
    }

    if (searchOptions === 'name') {
      getDataByName(location);
      changeExibition();
      setCategorySelect(resetFilter);
    }

    if (searchOptions === 'first-letter') {
      if (searchValue.length !== 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        getDataByFirstLetter(location);
        changeExibition();
        setCategorySelect(resetFilter);
      }
    }
  };

  return (
    <section className="search-inputs">
      <div className="search-radios">
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
