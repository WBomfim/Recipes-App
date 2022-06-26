import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';

function CardExploreRevenues() {
  const {
    exibitionRevenues,
    getDataByIngredientsExplore,
    setExibitionIngredient,
  } = useContext(RevenuesContext);

  const location = useLocation().pathname.split('/');
  const history = useHistory();
  const MAX_CARDS = 12;

  const handleClick = (param) => {
    getDataByIngredientsExplore(location[2], param);
    setExibitionIngredient(true);
    history.push(`/${location[2]}`);
  };

  if (!exibitionRevenues) return null;

  return (
    <section>
      {exibitionRevenues.map((revenue, index) => (
        index < MAX_CARDS ? (
          <button
            key={ index }
            onClick={ () => handleClick(revenue.strIngredient || revenue.strIngredient1) }
            type="button"
            data-testid={ `${index}-ingredient-card` }
          >
            {/* utilizar css para mudar o tamanho das imagens */}
            <img
              width="153px"
              height="150px"
              src={ `https://www.${location[2] === 'foods' ? 'themealdb' : 'thecocktaildb'}.com/images/ingredients/${revenue.strIngredient || revenue.strIngredient1}-Small.png` }
              alt={ `imagem-${revenue.strIngredient || revenue.strIngredient1}` }
              data-testid={ `${index}-card-img` }
            />
            <h3
              data-testid={ `${index}-card-name` }
            >
              { revenue.strIngredient || revenue.strIngredient1 }
            </h3>
          </button>
        ) : null
      ))}
    </section>
  );
}

export default CardExploreRevenues;
