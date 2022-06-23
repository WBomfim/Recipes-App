import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

function CardRevenues({ id, index, image, name, category, nameCard }) {
  const location = useLocation().pathname.split('/')[1];
  const history = useHistory();
  const handleClick = () => {
    if (location === 'foods') {
      history.push(`/foods/${id}`);
    }
    if (location === 'drinks') {
      history.push(`/drinks/${id}`);
    }
  };
  return (
    <div>
      <button
        onClick={ () => handleClick() }
        type="button"
        data-testid={ `${index}-${nameCard}` }
      >
        <div>
          {/* utilizar css para mudar o tamanho das imagens */}
          <img
            width="200px"
            height="200px"
            src={ image }
            alt={ `imagem-${name}` }
            data-testid={ `${index}-card-img` }
          />
          <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
          {category && <p>{ category }</p>}
        </div>
      </button>
    </div>
  );
}

CardRevenues.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  nameCard: PropTypes.string.isRequired,
  id: PropTypes.string,
};

CardRevenues.defaultProps = {
  category: null,
  id: null,
};

export default CardRevenues;
