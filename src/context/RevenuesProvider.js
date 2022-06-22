import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from './RevenuesContext';
import * as fetchFoods from '../services/fetchFoods';
import * as fetchDrinks from '../services/fetchDrinks';

function RevenuesProvider({ children }) {
  const [dataRevenues, setDataRevenues] = useState([]);
  const [exibitionRevenues, setExibitionRevenues] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchOptions, setSearchOptions] = useState('');
  // const [dataDrinks, setDataDrinks] = useState([]);
  // const [dataFoods, setDataFoods] = useState([]);
  // const [foodsCategories, setFoodCategories] = useState([]);
  // const [drinksCategories, setDrinksCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categorySelect, setCategorySelect] = useState({
    type: '',
    category: '',
  });
  const [filteredRecipes, SetFilteredRecipes] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const drinks = await fetchDrinks.getDrinks();
  //     const foods = await fetchFoods.getFoods();
  //     const foodCategory = await fetchFoods.getCategoriesFoods();
  //     const drinkCategory = await fetchFoods.getCategoriesFoods();
  //     setDataDrinks(drinks);
  //     setDataFoods(foods);
  //     setFoodCategories(foodCategory);
  //     setDrinksCategories(drinkCategory);
  //   };

  //   getData();
  // }, []);

  useEffect(() => {
    if (categorySelect.category !== '') {
      const filteringByCategory = async () => {
        if (categorySelect.type === 'drinks') {
          const data = await fetchDrinks.filterDrinks(categorySelect.category);
          return setExibitionRevenues([...data]);
        }
        const data = await fetchFoods.filterFoods(categorySelect.category);
        return setExibitionRevenues([...data]);
      };
      filteringByCategory();
    }
  }, [categorySelect]);

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

    // dataDrinks,
    // dataFoods,

    // foodsCategories,
    // drinksCategories,

    categories,
    setCategories,

    categorySelect,
    setCategorySelect,

    filteredRecipes,
    SetFilteredRecipes,
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
