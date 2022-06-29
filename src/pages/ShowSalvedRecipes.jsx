import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import { getDoneRecipes } from '../helpers/storageDoneRecipes';
import { getFavoriteRecipes } from '../helpers/storageFavorited';
import Header from '../components/Header';
import FilterBarStorage from '../components/FilterBarStorage';
import CardRevenuesStorage from '../components/CardRevenuesStorage';

function ShowSalvedRecipes() {
  const { setExibitionRevenues } = useContext(RevenuesContext);
  const location = useLocation().pathname.split('/')[1];

  useEffect(() => {
    const getSavedRecipes = () => {
      if (location === 'done-recipes') {
        const doneRecipes = getDoneRecipes();
        setExibitionRevenues([...doneRecipes]);
      }

      if (location === 'favorite-recipes') {
        const favoriteRecipes = getFavoriteRecipes();
        setExibitionRevenues([...favoriteRecipes]);
      }
    };
    getSavedRecipes();
  }, []);

  return (
    <>
      <Header
        title={ location === 'done-recipes' ? 'Done Recipes' : 'Favorite Recipes' }
      />
      <FilterBarStorage />
      <CardRevenuesStorage />
    </>
  );
}

export default ShowSalvedRecipes;
