import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
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
  const { id } = useParams();

  const handleSelect = (ingredient) => {
    if (ingredientsSelected.includes(ingredient)) {
      setIngredientsSelected(ingredientsSelected.filter((item) => item !== ingredient));
      storageInProgress.addInProgressRecipe({
        [id]: ingredientsSelected.filter((item) => item !== ingredient),
      });
    } else {
      setIngredientsSelected([...ingredientsSelected, ingredient]);
      storageInProgress.addInProgressRecipe({
        [id]: [...ingredientsSelected, ingredient],
      });
    }
  };

  return (
    <section>
      <h2>Ingredients</h2>
      {ingredientsList.length > 0 && (
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
      )}
      <h2>Instructions</h2>
      <p data-testid="instructions">{ revenueDetails.strInstructions }</p>
    </section>
  );
}

export default ShowDetailsProcess;
