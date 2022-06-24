import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getFoodsRandom } from '../services/fetchFoods';

function ExploreFoods() {
  const history = useHistory();

  const handleClick = async () => {
    const randomId = await getFoodsRandom();
    history.push(`/foods/${randomId}`);
  };

  return (
    <>
      <Header title="Explore Foods" />
      <section>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
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

export default ExploreFoods;
