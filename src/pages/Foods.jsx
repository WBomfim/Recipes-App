import React, { useContext } from 'react';
import CardFoods from '../components/CardFoods';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RevenuesContext from '../context/RevenuesContext';
// import ShowRevenues from '../components/ShowRevenues';

function Foods() {
  const { dataFoods,
    foodsCategories,
    categorySelect,
    filteredRecipes } = useContext(RevenuesContext);
  return (
    <section>
      <Header title="Foods" />
      <SearchBar />
      <div>
        <Categories categories={ foodsCategories } recipeType="foods" />
      </div>

      <div>
        <CardFoods recipes={ categorySelect.type !== '' ? filteredRecipes : dataFoods } />
      </div>
      {/* <ShowRevenues /> */}
      <Footer />
    </section>
  );
}

export default Foods;
