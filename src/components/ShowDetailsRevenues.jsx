import React, { useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';

function ShowDetailsRevenues() {
  const {
    exibitionDetails,
    ingredientsList,
  } = useContext(RevenuesContext);
  const [revenueDetails] = exibitionDetails;

  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsList.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}

          </li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p data-testid="instructions">{ revenueDetails.strInstructions }</p>
    </section>
  );
}

export default ShowDetailsRevenues;
