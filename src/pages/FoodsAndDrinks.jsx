import React, { useContext, useEffect } from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CardRevenues from '../components/CardRevenues';
import RevenuesContext from '../context/RevenuesContext';
import { getCategoriesDrinks, getDrinks } from '../services/fetchDrinks';

function FoodsAndDrinks() {
  const {
    setDataRevenues,
    setExibitionRevenues,
    setCategories,
  } = useContext(RevenuesContext);
  const MAX_CARDS = 12;

  useEffect(() => {
    const getData = async () => {
      const drinks = await getDrinks();
      const drinkCategory = await getCategoriesDrinks();
      setDataRevenues(drinks);
      setExibitionRevenues(drinks);
      setCategories(drinkCategory);
    };

    getData();
  }, []);

  return (
    <section>
      <Header title="Drinks" buttonSearch />
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
