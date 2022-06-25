import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardRevenues from '../components/CardRevenues';

function ExploreFoodDrinkIngredients() {
  const { getDataAllByIngredients } = useContext(RevenuesContext);
  const location = useLocation().pathname;
  const locationName = location.split('/')[2];
  const MAX_CARDS = 12;

  useEffect(() => {
    if (locationName === 'foods') {
      getDataAllByIngredients('foods');
    }
    if (locationName === 'drinks') {
      getDataAllByIngredients('drinks');
    }
  }, []);

  return (
    <>
      <Header title="Explore Ingredients" />
      <CardRevenues
        maxCard={ MAX_CARDS }
        nameCard="ingredient-card"
      />

      <Footer />
    </>
  );
}

export default ExploreFoodDrinkIngredients;
