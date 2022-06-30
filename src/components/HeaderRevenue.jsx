import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import { getFavoriteRecipes } from '../helpers/storageFavorited';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/HeaderRevenue.css';

function HeaderRevenue() {
  const {
    exibitionDetails,
    handleFavorite,
    handleShare,
  } = useContext(RevenuesContext);

  const location = useLocation().pathname;
  const locationClipboard = location.split('/');
  const locationName = location.split('s')[0].split('/')[1];
  const [revenueDetails] = exibitionDetails;
  const favoritesRecipes = getFavoriteRecipes();
  const isFavorite = favoritesRecipes
    .find((recipe) => recipe.id === locationClipboard[2]);

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
    <section className="revenue-items">
      <img
        className="revenue-picture"
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
        { revenueDetails.strAlcoholic || revenueDetails.strCategory }
      </p>
      <div>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => handleShare(`http://localhost:3000/${locationClipboard[1]}/${locationClipboard[2]}`) }
        >
          <img src={ shareIcon } alt="share-Icon" />
        </button>
        <button
          type="button"
          name="favorite-btn"
          onClick={ () => handleFavorite(revenueSaveStorage) }
        >
          <img
            data-testid="favorite-btn"
            src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
            alt="heart-Icon"
          />
        </button>
      </div>
    </section>
  );
}

export default HeaderRevenue;
