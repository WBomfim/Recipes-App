import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CardRevenues from '../components/CardRevenues';
import RevenuesContext from '../context/RevenuesContext';
import { getCategoriesDrinks, getDrinks } from '../services/fetchDrinks';
import { getCategoriesFoods, getFoods } from '../services/fetchFoods';

function FoodsAndDrinks() {
  const {
    setDataRevenues,
    setExibitionRevenues,
    setCategories,
    exibitionIngredient,
  } = useContext(RevenuesContext);
  const MAX_CARDS = 12;
  const location = useLocation().pathname.split('/')[1];
  const nameTitle = () => {
    if (location === 'foods') {
      return 'Foods';
    }

    if (location === 'drinks') {
      return 'Drinks';
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (location === 'foods') {
        const foods = await getFoods();
        const foodsCategory = await getCategoriesFoods();
        setDataRevenues(foods);
        setCategories(foodsCategory);
        if (!exibitionIngredient) {
          setExibitionRevenues(foods);
        }
      }

      if (location === 'drinks') {
        const drinks = await getDrinks();
        const drinkCategory = await getCategoriesDrinks();
        setDataRevenues(drinks);
        setCategories(drinkCategory);
        if (!exibitionIngredient) {
          setExibitionRevenues(drinks);
        }
      }
    };

    getData();
  }, [location]);

  return (
    <section>
      <Header title={ nameTitle() } buttonSearch />
      <SearchBar />
      <div>
        <Categories />
      </div>
      <div>
        <CardRevenues maxCard={ MAX_CARDS } nameCard="recipe-card" />
      </div>
      <Footer />
    </section>
  );
}

export default FoodsAndDrinks;
