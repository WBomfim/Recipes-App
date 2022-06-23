import React from 'react';
import PropTypes from 'prop-types';

function CardRevenues({ index, image, name, category, nameCard }) {
  return (
    <div data-testid={ `${index}-${nameCard}` }>
      <img src={ image } alt={ `imagem-${name}` } data-testid={ `${index}-card-img` } />
      <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
      {category && <p>{ category }</p>}
    </div>
  );
}

CardRevenues.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  nameCard: PropTypes.string.isRequired,
};

CardRevenues.defaultProps = {
  category: null,
};

export default CardRevenues;
