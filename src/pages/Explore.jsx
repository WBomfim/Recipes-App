import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore.css';

function Explore() {
  const history = useHistory();

  return (
    <div className="explore-page">
      <Header title="Explore" />
      <section className="explore-buttons">
        <button
          type="button"
          className="button-1"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          className="button-2"
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Explore;
