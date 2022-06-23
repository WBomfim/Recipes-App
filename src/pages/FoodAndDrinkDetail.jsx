import React, { useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import RevenuesHeader from '../components/RevenuesHeader';
import ShowDetailsRevenues from '../components/ShowDetailsRevenues';
import VideoRevenues from '../components/VideoRevenues';
import Button from '../components/Button';
import CardRevenues from '../components/CardRevenues';
import '../styles/FoodDetails.css';

function FoodAndDrinkDetail() {
  const { id } = useParams();
  const {
    getDataById,
    exibitionDetails,
    handleFavorite,
    handleShare,
    ingredientsList,
    getData,
    exibitionRevenues,
    verifyDoneRecipes,
    doneRecipes,
  } = useContext(RevenuesContext);
  const location = useLocation().pathname;

  const locationName = location.split('/')[1];
  const [revenueDetails] = exibitionDetails;
  const MAX_RECOMENDATIONS_DRINKS = 6;

  useEffect(() => {
    if (locationName === 'foods') {
      getDataById('foods', id);
      getData('drinks');
    } else {
      getDataById('drinks', id);
      getData('foods');
    }
    verifyDoneRecipes();
  }, []);

  return (
    <div>
      {revenueDetails
      && (
        <div>
          <RevenuesHeader
            image={ revenueDetails.strMealThumb || revenueDetails.strDrinkThumb }
            name={ revenueDetails.strMeal || revenueDetails.strDrink }
            category={ revenueDetails.strCategory }
            favorited
            handleFavorite={ handleFavorite }
            handleShare={ handleShare }
          />
          <ShowDetailsRevenues
            ingredients={ ingredientsList }
            instructions={ revenueDetails.strInstructions }
          />
          {revenueDetails.strYoutube
          && <VideoRevenues video={ revenueDetails.strYoutube } />}
          <div className="card-revenues-container">
            {exibitionRevenues && (
              exibitionRevenues.map((revenue, index) => (
                index < MAX_RECOMENDATIONS_DRINKS ? (
                  <CardRevenues
                    key={ revenue.idDrink || revenue.idMeal }
                    index={ index }
                    image={ revenue.strDrinkThumb || revenue.strMealThumb }
                    name={ revenue.strDrink || revenue.strMeal }
                    category={ revenue.strCategory }
                    nameCard="recomendation-card"
                  />
                ) : null
              ))
            )}
          </div>
          {doneRecipes ? null
            : (
              <Button
                name="Start Recipe"
                dataTestId="start-recipe-btn"
                disabled={ false }
                onClick={ () => console.log('button') }
              />)}
        </div>
      )}
    </div>
  );
}

export default FoodAndDrinkDetail;
