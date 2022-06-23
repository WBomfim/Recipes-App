import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function HeaderRevenue({ favorited, handleFavorite, handleShare }) {
  const { exibitionDetails } = useContext(RevenuesContext);
  const [revenueDetails] = exibitionDetails;

  return (
    <section>
      <img
        data-testid="recipe-photo"
        src={ revenueDetails.strMealThumb || revenueDetails.strDrinkThumb }
        alt={ `imagem-${revenueDetails.strMeal || revenueDetails.strDrink}` }
      />
      <h1
        data-testid="recipe-title"
      >
        { revenueDetails.strMeal || revenueDetails.strDrink }

      </h1>
      <p data-testid="recipe-category">{ revenueDetails.strCategory }</p>
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
  favorited: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleShare: PropTypes.func.isRequired,
};

export default HeaderRevenue;
