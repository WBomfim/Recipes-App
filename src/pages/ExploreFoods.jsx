import React from 'react';
import { useHistory } from 'react-router-dom';
import { getFoodsRandom } from '../services/fetchFoods';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore.css';

function ExploreFoods() {
  const history = useHistory();

  const handleClick = async () => {
    const randomId = await getFoodsRandom();
    history.push(`/foods/${randomId}`);
  };

  return (
    <>
      <Header title="Explore Foods" />
      <section className="explore-buttons">
        <button
          className="ingredient"
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          className="nationality"
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          className="surprise"
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
