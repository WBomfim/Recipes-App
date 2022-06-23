import React from 'react';
import PropTypes from 'prop-types';

function ShowDetailsRevenues({ ingredients, instructions }) {
  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingr, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingr}

          </li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p data-testid="instructions">{ instructions }</p>
    </section>
  );
}

ShowDetailsRevenues.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.any).isRequired,
  instructions: PropTypes.string.isRequired,
};

export default ShowDetailsRevenues;
