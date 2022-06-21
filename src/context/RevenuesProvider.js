import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from './RevenuesContext';
import * as fetchFoods from '../services/fetchFoods';
import * as fetchDrinks from '../services/fetchDrinks';

function RevenuesProvider({ children }) {
  const [dataRevenues, setDataRevenues] = useState([]);
  const [exibitionRevenues, setExibitionRevenues] = useState([]);
  const [searchValue, setSearchValue] = useState('chicken');
  const [searchOptions, setSearchOptions] = useState('');

  const getDataByIngredients = async (fetchOption) => {
    if (fetchOption === 'foods') {
      const data = await fetchFoods.getFoodsIngredients(searchValue);
      setDataRevenues(data);
      setExibitionRevenues(data);
    }

    if (fetchOption === 'drinks') {
      const data = await fetchDrinks.getDrinksIngredients(searchValue);
      setDataRevenues(data);
      setExibitionRevenues(data);
    }
  };

  const getDataByName = async (fetchOption) => {
    if (fetchOption === 'foods') {
      const data = await fetchFoods.getFoodsName(searchValue);
      setDataRevenues(data);
      setExibitionRevenues(data);
    }

    if (fetchOption === 'drinks') {
      const data = await fetchDrinks.getDrinksName(searchValue);
      setDataRevenues(data);
      setExibitionRevenues(data);
    }
  };

  const getDataByFirstLetter = async (fetchOption) => {
    if (fetchOption === 'foods') {
      const data = await fetchFoods.getFoodsFirstLetter(searchValue);
      setDataRevenues(data);
      setExibitionRevenues(data);
    }

    if (fetchOption === 'drinks') {
      const data = await fetchDrinks.getDrinksFirstLetter(searchValue);
      setDataRevenues(data);
      setExibitionRevenues(data);
    }
  };

  const context = {
    dataRevenues,
    setDataRevenues,

    exibitionRevenues,
    setExibitionRevenues,

    searchValue,
    setSearchValue,

    searchOptions,
    setSearchOptions,

    getDataByIngredients,
    getDataByName,
    getDataByFirstLetter,
  };

  return (
    <RevenuesContext.Provider value={ context }>
      {children}
    </RevenuesContext.Provider>
  );
}

RevenuesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RevenuesProvider;
