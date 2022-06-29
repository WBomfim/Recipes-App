import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getFoodsRandom } from '../services/fetchFoods';
import { getDrinksRandom } from '../services/fetchDrinks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore.css';

function ExploreFoodsAndDrinks() {
  const history = useHistory();
  const location = useLocation().pathname.split('/')[2];
  const title = location[0].toUpperCase() + location.slice(1);

  const handleClick = async () => {
    let randomId = '';
    if (location === 'foods') {
      randomId = await getFoodsRandom();
    }

    if (location === 'drinks') {
      randomId = await getDrinksRandom();
    }
    history.push(`/${location}/${randomId}`);
  };

  return (
    <>
      <Header title={ `Explore ${title}` } />
      <section className="explore-buttons">
        <button
          className="ingredient"
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push(`/explore/${location}/ingredients`) }
        >
          By Ingredient
        </button>
        {location === 'foods' && (
          <button
            className="nationality"
            type="button"
            data-testid="explore-by-nationality"
            onClick={ () => history.push('/explore/foods/nationalities') }
          >
            By Nationality
          </button>
        )}
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

export default ExploreFoodsAndDrinks;
