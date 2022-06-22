import React from 'react';
import PropTypes from 'prop-types';

function CardFoods({ recipes }) {
  const twelve = 12;
  return (
    <section>
      {recipes.slice(0, twelve)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ idMeal }>
            <img
              src={ strMealThumb }
              alt={ `Receita de ${strMeal}` }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strMeal}</p>
          </div>
        ))}
    </section>
  );
}

CardFoods.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardFoods;
