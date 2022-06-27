import React from 'react';
import { useHistory } from 'react-router-dom';
import { getDrinksRandom } from '../services/fetchDrinks';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks() {
  const history = useHistory();

  const handleClick = async () => {
    const randomId = await getDrinksRandom();
    history.push(`/drinks/${randomId}`);
  };

  return (
    <>
      <Header title="Explore Drinks" />
      <section>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ handleClick }
        >
          Surprise me!
        </button>
      </section>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
