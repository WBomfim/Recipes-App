import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import '../styles/CarouselRevenues.css';

function CarouselRevenues() {
  const { exibitionRevenues } = useContext(RevenuesContext);
  const location = useLocation().pathname.split('/')[1];
  const inverseLocation = location === 'foods' ? 'drinks' : 'foods';
  const history = useHistory();
  const MAX_CARDS = 6;

  const handleClick = (id) => {
    history.push(`/${inverseLocation}/${id}`);
  };

  if (!exibitionRevenues) return null;

  return (
    <section className="carousel">
      {exibitionRevenues.slice(0, MAX_CARDS).map((revenue, index) => (
        <button
          key={ revenue.idMeal || revenue.idDrink }
          onClick={ () => handleClick(revenue.idMeal || revenue.idDrink) }
          type="button"
          data-testid={ `${index}-recomendation-card` }
        >
          {/* utilizar css para mudar o tamanho das imagens */}
          <img
            width="153px"
            height="150px"
            src={ revenue.strDrinkThumb || revenue.strMealThumb }
            alt={ `imagem-${revenue.strDrink || revenue.strMeal}` }
            data-testid={ `${index}-card-img` }
          />
          <div>
            <h3 data-testid={ `${index}-recomendation-title` }>
              { revenue.strDrink || revenue.strMeal }
            </h3>
            <p>{ revenue.strCategory }</p>
          </div>
        </button>
      ))}
    </section>
  );
}

export default CarouselRevenues;
