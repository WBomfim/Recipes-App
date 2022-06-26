import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardExploreRevenues from '../components/CardExploreRevenues';

function ExploreFoodDrinkIngredients() {
  const { getDataAllByIngredients } = useContext(RevenuesContext);
  const location = useLocation().pathname;
  const locationName = location.split('/')[2];

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
      <CardExploreRevenues />
      <Footer />
    </>
  );
}

export default ExploreFoodDrinkIngredients;
