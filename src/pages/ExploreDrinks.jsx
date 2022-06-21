import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks() {
  const history = useHistory();
  return (
    <div>
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
          // após implementação da pagina de detalhes req 74
        >
          Surprise me!
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
