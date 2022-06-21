import React, { useContext } from 'react';
import CardDrinks from '../components/CardDrinks';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
// import ShowRevenues from '../components/ShowRevenues';
import RevenuesContext from '../context/RevenuesContext';

function Drinks() {
  const { dataDrinks,
    drinksCategories,
    categorySelect,
    filteredRecipes } = useContext(RevenuesContext);
  return (
    <section>
      <Header title="Drinks" />
      <SearchBar />
      <div>
        <Categories categories={ drinksCategories } recipeType="drinks" />
      </div>

      <div>
        <CardDrinks
          recipes={ categorySelect.type !== '' ? filteredRecipes : dataDrinks }
        />
      </div>
      {/* <ShowRevenues /> */}
      <Footer />
    </section>
  );
}

export default Drinks;
