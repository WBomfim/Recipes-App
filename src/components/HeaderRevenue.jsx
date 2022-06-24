import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function HeaderRevenue({ handleFavorite, handleShare }) {
  const { exibitionDetails, isFavorited } = useContext(RevenuesContext);
  const location = useLocation().pathname;
  const locationName = location.split('s')[0].split('/')[1];
  const [revenueDetails] = exibitionDetails;

  const revenueSaveStorage = {
    id: revenueDetails.idMeal || revenueDetails.idDrink,
    type: locationName,
    nationality: revenueDetails.strArea || '',
    category: revenueDetails.strCategory,
    alcoholicOrNot: revenueDetails.strAlcoholic || '',
    name: revenueDetails.strMeal || revenueDetails.strDrink,
    image: revenueDetails.strMealThumb || revenueDetails.strDrinkThumb,
  };

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
        onClick={ () => handleFavorite(revenueSaveStorage) }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorited ? blackHeartIcon : whiteHeartIcon }
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
