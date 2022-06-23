import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function HeaderRevenue({
  image, name, category, favorited, handleFavorite, handleShare }) {
  return (
    <section>
      <img data-testid="recipe-photo" src={ image } alt={ `imagem-${name}` } />
      <h1 data-testid="recipe-title">{ name }</h1>
      <p data-testid="recipe-category">{ category }</p>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleShare }
      >
        <img src={ shareIcon } alt="share-Icon" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ handleFavorite }
      >
        <img src={ favorited ? blackHeartIcon : whiteHeartIcon } alt="heart-Icon" />
      </button>
    </section>
  );
}

HeaderRevenue.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleShare: PropTypes.func.isRequired,
};

export default HeaderRevenue;
