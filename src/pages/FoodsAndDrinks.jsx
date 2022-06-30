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
import '../styles/FoodsAndDrinks.css';

function FoodsAndDrinks() {
  const {
    setDataRevenues,
    setExibitionRevenues,
    setCategories,
    exibitionIngredient,
    search,
  } = useContext(RevenuesContext);

  const location = useLocation().pathname.split('/')[1];
  const title = location[0].toUpperCase() + location.slice(1);

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
    <div className="main-page">
      <Header title={ title } buttonSearch />
      {search && <SearchBar />}
      <Categories />
      <CardRevenues />
      <Footer />
    </div>
  );
}

export default FoodsAndDrinks;
