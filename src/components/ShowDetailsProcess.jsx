import React, { useContext } from 'react';
import RevenuesContext from '../context/RevenuesContext';

function ShowDetailsProcess() {
  const {
    exibitionDetails,
    ingredientsList,
  } = useContext(RevenuesContext);
  const [revenueDetails] = exibitionDetails;

  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsList.map((ingr, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            {ingr}

          </li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p data-testid="instructions">{ revenueDetails.strInstructions }</p>
    </section>
  );
}

export default ShowDetailsProcess;
