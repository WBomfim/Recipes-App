import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import * as storageInProgress from '../helpers/storageInProgress';
import '../styles/ShowDetailsProcess.css';

function ShowDetailsProcess() {
  const {
    exibitionDetails,
    ingredientsList,
    ingredientsSelected,
    setIngredientsSelected,
  } = useContext(RevenuesContext);

  const [revenueDetails] = exibitionDetails;
  const location = useLocation().pathname.split('/')[1];
  const { id } = useParams();

  const handleSelect = (ingredient) => {
    if (ingredientsSelected.includes(ingredient)) {
      const filteredIngredients = ingredientsSelected
        .filter((ingredientSelected) => ingredientSelected !== ingredient);
      setIngredientsSelected(filteredIngredients);
      storageInProgress.addInProgressRecipe({
        [id]: filteredIngredients,
      }, location);
    } else {
      setIngredientsSelected([...ingredientsSelected, ingredient]);
      storageInProgress.addInProgressRecipe({
        [id]: [...ingredientsSelected, ingredient],
      }, location);
    }
  };

  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsList.map((ingredient, index) => (
          <li
            key={ index }
            className={ ingredientsSelected.includes(ingredient) ? 'selected' : '' }
            data-testid={ `${index}-ingredient-step` }
          >
            <label htmlFor={ index }>
              <input
                id={ index }
                type="checkbox"
                checked={ ingredientsSelected.includes(ingredient) }
                onChange={ () => handleSelect(ingredient) }
              />
              { ingredient }
            </label>
          </li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p data-testid="instructions">{ revenueDetails.strInstructions }</p>
    </section>
  );
}

export default ShowDetailsProcess;
