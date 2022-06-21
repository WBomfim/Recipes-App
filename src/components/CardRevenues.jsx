import React from 'react';
import PropTypes from 'prop-types';

function CardRevenues({ index, imagem, nome }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img src={ imagem } alt={ `imagem-${nome}` } data-testid={ `${index}-card-img` } />
      <h3 data-testid={ `${index}-card-name` }>{ nome }</h3>
    </div>
  );
}

CardRevenues.propTypes = {
  index: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default CardRevenues;
