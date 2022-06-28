import React, { useContext, useEffect } from 'react';
import RevenuesContext from '../context/RevenuesContext';
import { getDoneRecipes } from '../helpers/storageDoneRecipes';
import Header from '../components/Header';
import FilterBarStorage from '../components/FilterBarStorage';
import CardRevenuesStorage from '../components/CardRevenuesStorage';

function DoneRecipes() {
  const { setExibitionRevenues } = useContext(RevenuesContext);

  useEffect(() => {
    const doneRecipes = getDoneRecipes();
    setExibitionRevenues([...doneRecipes]);
  }, []);

  return (
    <>
      <Header title="Done Recipes" />
      <FilterBarStorage />
      <CardRevenuesStorage />
    </>
  );
}

export default DoneRecipes;
