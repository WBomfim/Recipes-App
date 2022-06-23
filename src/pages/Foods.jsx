import React, { useContext, useEffect } from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RevenuesContext from '../context/RevenuesContext';
import { getCategoriesFoods, getFoods } from '../services/fetchFoods';
import ShowRevenues from '../components/ShowRevenues';

function Foods() {
  const {
    setDataRevenues,
    setExibitionRevenues,
    setCategories,
  } = useContext(RevenuesContext);

  useEffect(() => {
    const getData = async () => {
      const foods = await getFoods();
      const foodCategory = await getCategoriesFoods();
      setDataRevenues(foods);
      setExibitionRevenues(foods);
      setCategories(foodCategory);
    };

    getData();
  }, []);

  return (
    <section>
      <Header title="Foods" buttonSearch />
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

export default Foods;
