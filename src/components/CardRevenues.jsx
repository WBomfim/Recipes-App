import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import '../styles/CardRevenues.css';

function CardRevenues() {
  const { exibitionRevenues } = useContext(RevenuesContext);

  const location = useLocation().pathname.split('/');
  const history = useHistory();
  const MAX_CARDS = 12;

  const handleClick = (id) => {
    if (location[3] === 'nationalities') {
      history.push(`/${location[2]}/${id}`);
    } else {
      history.push(`/${location[1]}/${id}`);
    }
  };

  if (!exibitionRevenues) return null;

  return (
    <section className="cards">
      {exibitionRevenues.slice(0, MAX_CARDS).map((revenue, index) => (
        <button
          key={ revenue.idMeal || revenue.idDrink }
          onClick={ () => handleClick(revenue.idMeal || revenue.idDrink) }
          type="button"
          data-testid={ `${index}-recipe-card` }
        >
          {/* utilizar css para mudar o tamanho das imagens */}
          <img
            width="153px"
            height="150px"
            src={ revenue.strDrinkThumb || revenue.strMealThumb }
            alt={ `imagem-${revenue.strDrink || revenue.strMeal}` }
            data-testid={ `${index}-card-img` }
          />
          <h3
            data-testid={ `${index}-card-name` }
          >
            { revenue.strDrink || revenue.strMeal }
          </h3>
        </button>
      ))}
    </section>
  );
}

export default CardRevenues;
