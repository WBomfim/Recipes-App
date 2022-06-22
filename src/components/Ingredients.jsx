import React from 'react';
import PropTypes from 'prop-types';

function Ingredients({ ingredients }) {
  return (
    <div>
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
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Ingredients;
