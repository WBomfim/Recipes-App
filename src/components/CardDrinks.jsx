import React from 'react';
import PropTypes from 'prop-types';

function CardDrinks({ recipes }) {
  const twelve = 12;
  return (
    <section>
      {recipes.slice(0, twelve)
        .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ idDrink }>
            <img
              src={ strDrinkThumb }
              alt={ `Receita de ${strDrink}` }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strDrink}</p>
          </div>
        ))}
    </section>
  );
}

CardDrinks.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardDrinks;
