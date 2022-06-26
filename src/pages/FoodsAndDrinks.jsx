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
  } = useContext(RevenuesContext);
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
        setExibitionRevenues(foods);
        setCategories(foodsCategory);
      }

      if (location === 'drinks') {
        const drinks = await getDrinks();
        const drinkCategory = await getCategoriesDrinks();
        setDataRevenues(drinks);
        setExibitionRevenues(drinks);
        setCategories(drinkCategory);
      }
    };

    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <section>
      <Header title={ nameTitle() } buttonSearch />
      <SearchBar />
      <div>
        <Categories />
      </div>
      <div>
        <CardRevenues />
      </div>
      <Footer />
    </section>
  );
}

export default FoodsAndDrinks;
