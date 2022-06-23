import React, { useContext, useEffect } from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ShowRevenues from '../components/ShowRevenues';
import RevenuesContext from '../context/RevenuesContext';
import { getCategoriesDrinks, getDrinks } from '../services/fetchDrinks';

function Drinks() {
  const {
    setDataRevenues,
    setExibitionRevenues,
    setCategories,
  } = useContext(RevenuesContext);

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
        <ShowRevenues />
      </div>
      <Footer />
    </section>
  );
}

export default Drinks;
