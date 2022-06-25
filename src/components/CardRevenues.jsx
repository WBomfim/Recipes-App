import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';

function CardRevenues({ category, maxCard, nameCard }) {
  const {
    exibitionRevenues,
    getDataByIngredientsExplore,
    setExibitionIngredient,
  } = useContext(RevenuesContext);
  const location = useLocation().pathname.split('/')[1];
  const locationExplore = useLocation().pathname.split('/');
  const history = useHistory();

  const handleClick = async (param) => {
    if (locationExplore[3] === 'ingredients') {
      await getDataByIngredientsExplore(locationExplore[2], param);
      setExibitionIngredient(true);
      history.push(`/${locationExplore[2]}`);
    }
    if (location === 'foods') {
      history.push(`/foods/${param}`);
    }
    if (location === 'drinks') {
      history.push(`/drinks/${param}`);
    }
  };

  return (
    <div>
      {exibitionRevenues && (
        exibitionRevenues.map((revenue, index) => (
          index < maxCard ? (
            <button
              key={ revenue.idMeal || revenue.idDrink || index }
              onClick={ () => handleClick(
                revenue.idMeal
                || revenue.idDrink
                || revenue.strIngredient
                || revenue.strIngredient1,
              ) }
              type="button"
              data-testid={ `${index}-${nameCard}` }
            >
              <div>
                {/* utilizar css para mudar o tamanho das imagens */}
                <img
                  width="200px"
                  height="200px"
                  src={ revenue.strDrinkThumb || revenue.strMealThumb || `https://www.${locationExplore[2] === 'foods' ? 'themealdb' : 'thecocktaildb'}.com/images/ingredients/${revenue.strIngredient || revenue.strIngredient1}-Small.png` }
                  alt={ `imagem-${revenue.strDrink || revenue.strMeal}` }
                  data-testid={ `${index}-card-img` }
                />
                <h3
                  data-testid={ `${index}-card-name` }
                >
                  { revenue.strDrink
                  || revenue.strMeal
                  || revenue.strIngredient
                  || revenue.strIngredient1}

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
