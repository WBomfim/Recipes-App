import React, { useEffect, useContext } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import HeaderRevenue from '../components/HeaderRevenue';
import ShowDetailsRevenues from '../components/ShowDetailsRevenues';
import VideoRevenues from '../components/VideoRevenues';
import Button from '../components/Button';
import CardRevenues from '../components/CardRevenues';
import '../styles/FoodAndDrinkDetails.css';

function FoodAndDrinkDetail() {
  const { id } = useParams();
  const history = useHistory();
  const {
    getDataById,
    exibitionDetails,
    handleFavorite,
    handleShare,
    ingredientsList,
    getData,
    verifyRecipiesStorage,
    doneRecipes,
    progressRecipies,
    alertShare,
  } = useContext(RevenuesContext);
  const location = useLocation().pathname;

  const locationName = location.split('/')[1];
  const [revenueDetails] = exibitionDetails;
  const MAX_CARDS = 6;

  useEffect(() => {
    if (locationName === 'foods') {
      getDataById('foods', id);
      getData('drinks');
    } else {
      getDataById('drinks', id);
      getData('foods');
    }
    verifyRecipiesStorage();
  }, []);

  return (
    <div>
      {revenueDetails
      && (
        <div>
          <HeaderRevenue
            favorited
            handleFavorite={ handleFavorite }
            handleShare={ handleShare }
          />
          {alertShare && <span>Link copied!</span>}
          <ShowDetailsRevenues
            ingredients={ ingredientsList }
            instructions={ revenueDetails.strInstructions }
          />
          {revenueDetails.strYoutube
          && <VideoRevenues
            video={ revenueDetails.strYoutube }
          />}
          <CardRevenues
            nameCard="recomendation-card"
            maxCard={ MAX_CARDS }
            category
          />
          {doneRecipes ? null
            : (
              <Button
                name={ progressRecipies ? 'Continue Recipe' : 'Start Recipe' }
                dataTestId="start-recipe-btn"
                disabled={ false }
                onClick={ () => history.push(`${location}/in-progress`) }
              />)}
        </div>
      )}
    </div>
  );
}

export default FoodAndDrinkDetail;
