import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from './RevenuesContext';
import * as fetchFoods from '../services/fetchFoods';
import * as fetchDrinks from '../services/fetchDrinks';
import { getInProgressRecipes } from '../helpers/storageInProgress';
import * as storageFavorited from '../helpers/storageFavorited';
import { getDoneRecipes, addDoneRecipe } from '../helpers/storageDoneRecipes';

const copy = require('clipboard-copy');

function RevenuesProvider({ children }) {
  const [dataRevenues, setDataRevenues] = useState([]);
  const [exibitionRevenues, setExibitionRevenues] = useState([]);
  const [exibitionDetails, setExibitionDetails] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsSelected, setIngredientsSelected] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchOptions, setSearchOptions] = useState('');
  const [doneRecipes, setDoneRecipies] = useState('');
  const [progressRecipies, setProgressRecipies] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categorySelect, setCategorySelect] = useState({ type: '', category: '' });
  const [alertShare, setAlertShare] = useState(false);
  const [click, setClick] = useState(false);
  const [isFavorited, setIsFavorited] = useState();
  const [exibitionIngredient, setExibitionIngredient] = useState();

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

  useEffect(() => {
    const TWENTY = 20;
    const FIFTEEN = 15;
    let maxIngrd = null;
    const [revenue] = exibitionDetails;
    let arrayIngredients = [];
    if (revenue) {
      if (revenue.idDrink) {
        maxIngrd = FIFTEEN;
      } else {
        maxIngrd = TWENTY;
      }

      for (let i = 1; i <= maxIngrd; i += 1) {
        if (revenue[`strIngredient${i}`] !== ''
        && revenue[`strIngredient${i}`] !== null) {
          arrayIngredients = [...arrayIngredients,
            `${revenue[`strIngredient${i}`]} - ${revenue[`strMeasure${i}`]}`];
        }
      }
    }
    setIngredientsList(arrayIngredients);
  }, [exibitionDetails]);

  const getDataByIngredients = async (route) => {
    let data = [];
    if (route === 'foods') {
      data = await fetchFoods.getFoodsIngredients(searchValue);
    } else if (route === 'drinks') {
      data = await fetchDrinks.getDrinksIngredients(searchValue);
    }
    setDataRevenues(data);
    setExibitionRevenues(data);
  };

  const getDataByIngredientsExplore = async (route, fetchIngredients) => {
    let data = [];
    if (route === 'foods') {
      data = await fetchFoods.getFoodsIngredients(fetchIngredients);
    } else if (route === 'drinks') {
      data = await fetchDrinks.getDrinksIngredients(fetchIngredients);
    }
    setDataRevenues(data);
    setExibitionRevenues(data);
  };

  const getDataAllByIngredients = async (fetchIngredients) => {
    let data = [];
    if (fetchIngredients === 'foods') {
      data = await fetchFoods.getAllFoodsIngredients();
    } else if (fetchIngredients === 'drinks') {
      data = await fetchDrinks.getAllDrinksIngredients();
    }
    setDataRevenues(data);
    setExibitionRevenues(data);
  };

  const getDataByName = async (route) => {
    let data = [];
    if (route === 'foods') {
      data = await fetchFoods.getFoodsName(searchValue);
    } else if (route === 'drinks') {
      data = await fetchDrinks.getDrinksName(searchValue);
    }
    setDataRevenues(data);
    setExibitionRevenues(data);
  };

  const getDataByFirstLetter = async (route) => {
    let data = [];
    if (route === 'foods') {
      data = await fetchFoods.getFoodsFirstLetter(searchValue);
    } else if (route === 'drinks') {
      data = await fetchDrinks.getDrinksFirstLetter(searchValue);
    }
    setDataRevenues(data);
    setExibitionRevenues(data);
  };

  const getDataById = async (route, id) => {
    let data = [];
    if (route === 'foods') {
      data = await fetchFoods.getFoodsId(id);
    } else if (route === 'drinks') {
      data = await fetchDrinks.getDrinksId(id);
    }
    setExibitionDetails(data);
  };

  const getData = async (route) => {
    let data = [];
    if (route === 'foods') {
      data = await fetchFoods.getFoods();
    } else if (route === 'drinks') {
      data = await fetchDrinks.getDrinks();
    }
    setDataRevenues(data);
    setExibitionRevenues(data);
  };

  const verifyRecipiesStorage = (id, option) => {
    const recipiesDone = getDoneRecipes();
    const favoriteRecipies = storageFavorited.getFavoriteRecipes();
    const recipiesInProgress = getInProgressRecipes();

    const recipiesInProgressVerified = Object.keys(recipiesInProgress[option])
      .some((recipie) => recipie === id);
    setProgressRecipies(recipiesInProgressVerified);

    const recipiesDoneVerified = recipiesDone
      .some((recipie) => recipie.id === id);
    setDoneRecipies(recipiesDoneVerified);

    const recipiesFavoriteds = favoriteRecipies
      .some((recipie) => recipie.id === id);
    setIsFavorited(recipiesFavoriteds);
  };

  const handleFavorite = (revenue) => {
    if (!isFavorited) {
      storageFavorited.saveFavoriteRecipes(revenue);
    } else {
      storageFavorited.removeFavoriteRecipes(revenue);
    }
    setIsFavorited(!isFavorited);
  };

  const finishAndSaveRecipe = (locationName) => {
    const [revenueDetails] = exibitionDetails;
    const revenueSaveDone = {
      id: revenueDetails.idMeal || revenueDetails.idDrink,
      type: locationName,
      nationality: revenueDetails.strArea || '',
      category: revenueDetails.strCategory,
      alcoholicOrNot: revenueDetails.strAlcoholic || '',
      name: revenueDetails.strMeal || revenueDetails.strDrink,
      image: revenueDetails.strMealThumb || revenueDetails.strDrinkThumb,
      doneDate: new Date().toLocaleDateString(),
      tags: revenueDetails.strTags === null ? [] : revenueDetails.strTags.split(','),
    };
    addDoneRecipe(revenueSaveDone);
  };

  const handleShare = (url) => {
    copy(url);
    setAlertShare(true);
  };

  const context = { dataRevenues,
    setDataRevenues,
    exibitionRevenues,
    setExibitionRevenues,
    exibitionDetails,
    setExibitionDetails,
    searchValue,
    setSearchValue,
    searchOptions,
    setSearchOptions,
    alertShare,
    setAlertShare,
    click,
    setClick,
    exibitionIngredient,
    setExibitionIngredient,
    ingredientsList,
    doneRecipes,
    progressRecipies,
    isFavorited,
    ingredientsSelected,
    setIngredientsSelected,
    categories,
    setCategories,
    categorySelect,
    setCategorySelect,
    getDataByIngredients,
    getDataByIngredientsExplore,
    getDataByName,
    getDataByFirstLetter,
    getData,
    getDataAllByIngredients,
    getDataById,
    finishAndSaveRecipe,
    handleFavorite,
    handleShare,
    verifyRecipiesStorage,
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
