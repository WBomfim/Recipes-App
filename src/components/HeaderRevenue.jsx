import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function HeaderRevenue({ handleFavorite, handleShare }) {
  const { exibitionDetails, favoritedBoll } = useContext(RevenuesContext);
  const location = useLocation().pathname;
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
      <p
        data-testid="recipe-category"
      >
        { revenueDetails.strAlcoholic
          ? revenueDetails.strAlcoholic : revenueDetails.strCategory }

      </p>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => handleShare(`http://localhost:3000${location}`) }
      >
        <img src={ shareIcon } alt="share-Icon" />
      </button>
      <button
        type="button"
        onClick={ handleFavorite }
      >
        <img
          data-testid="favorite-btn"
          src={ favoritedBoll ? blackHeartIcon : whiteHeartIcon }
          alt="heart-Icon"
        />
      </button>
    </section>
  );
}

HeaderRevenue.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  handleShare: PropTypes.func.isRequired,
};

export default HeaderRevenue;
