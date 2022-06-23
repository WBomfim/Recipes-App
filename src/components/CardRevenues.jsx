import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';

function CardRevenues({ category, maxCard, nameCard }) {
  const { exibitionRevenues } = useContext(RevenuesContext);
  const location = useLocation().pathname.split('/')[1];
  const history = useHistory();

  const handleClick = (id) => {
    if (location === 'foods') {
      history.push(`/foods/${id}`);
    }

    if (location === 'drinks') {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <div>
      {exibitionRevenues && (
        exibitionRevenues.map((revenue, index) => (
          index < maxCard ? (
            <button
              key={ revenue.idMeal || revenue.idDrink }
              onClick={ () => handleClick(revenue.idMeal || revenue.idDrink) }
              type="button"
              data-testid={ `${index}-${nameCard}` } // ${index}-recipe-card`
            >
              <div>
                {/* utilizar css para mudar o tamanho das imagens */}
                <img
                  width="200px"
                  height="200px"
                  src={ revenue.strDrinkThumb || revenue.strMealThumb }
                  alt={ `imagem-${revenue.strDrink || revenue.strMeal}` }
                  data-testid={ `${index}-card-img` }
                />
                <h3
                  data-testid={ `${index}-card-name` }
                >
                  { revenue.strDrink || revenue.strMeal }

                </h3>
                {category && <p>{ revenue.strCategory }</p>}
              </div>
            </button>
          ) : null
        ))
      )}
    </div>
  );
}

CardRevenues.propTypes = {
  maxCard: PropTypes.number.isRequired,
  category: PropTypes.bool,
  nameCard: PropTypes.string.isRequired,
};

CardRevenues.defaultProps = {
  category: null,
};

export default CardRevenues;
