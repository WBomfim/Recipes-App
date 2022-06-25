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
      verifyRecipiesStorage(id, 'meals');
    } else {
      getDataById('drinks', id);
      getData('foods');
      verifyRecipiesStorage(id, 'cocktails');
    }
  }, []);

  return (
    <div>
      {revenueDetails
      && (
        <div>
          <HeaderRevenue
            handleFavorite={ handleFavorite }
            handleShare={ handleShare }
          />
          {alertShare && <span>Link copied!</span>}
          <ShowDetailsRevenues />
          {revenueDetails.strYoutube
          && <VideoRevenues
            video={ revenueDetails.strYoutube }
          />}
          <div className="container-recomendatio">
            <CardRevenues
              nameCard="recomendation-card"
              maxCard={ MAX_CARDS }
              category
            />
          </div>
          {doneRecipes ? null
            : (
              <div className="container-recomendation">
                <Button
                  name={ progressRecipies ? 'Continue Recipe' : 'Start Recipe' }
                  dataTestId="start-recipe-btn"
                  disabled={ false }
                  onClick={ () => history.push(`${location}/in-progress`) }
                />
              </div>)}
        </div>
      )}
    </div>
  );
}

export default FoodAndDrinkDetail;
