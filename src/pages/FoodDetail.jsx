import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import RevenuesHeader from '../components/RevenuesHeader';
import ShowDetailsRevenues from '../components/ShowDetailsRevenues';
import VideoRevenues from '../components/VideoRevenues';
import Button from '../components/Button';
import CardRevenues from '../components/CardRevenues';

function FoodDetail() {
  const { id } = useParams();
  const {
    getDataById,
    exibitionDetails,
    handleFavorite,
    handleShare,
    ingredientsList,
    getDataByName,
    exibitionRevenues,
  } = useContext(RevenuesContext);
  const [revenueDetails] = exibitionDetails;
  const MAX_RECOMENDATIONS_DRINKS = 6;

  useEffect(() => {
    getDataById('foods', id);
  }, []);

  useEffect(() => {
    if (revenueDetails) {
      getDataByName('drinks', revenueDetails.strMeal);
    }
  }, [exibitionDetails]);

  return (
    <div>
      {revenueDetails
      && (
        <div>
          <RevenuesHeader
            image={ revenueDetails.strMealThumb }
            name={ revenueDetails.strMeal }
            category={ revenueDetails.strCategory }
            favorited
            handleFavorite={ handleFavorite }
            handleShare={ handleShare }
          />
          <ShowDetailsRevenues
            ingredients={ ingredientsList }
            instructions={ revenueDetails.strInstructions }
          />
          <VideoRevenues video={ revenueDetails.strYoutube } />
          {exibitionRevenues && (
            exibitionRevenues.map((revenue, index) => (
              index < MAX_RECOMENDATIONS_DRINKS ? (
                <CardRevenues
                  key={ revenue.idMeal }
                  index={ index }
                  image={ revenue.strDrinkThumb || revenue.strMealThumb }
                  name={ revenue.strDrink || revenue.strMeal }
                  category={ revenue.strCategory }
                  nameCard="recomendation-card"
                />
              ) : null
            ))
          )}
          <Button
            name="Start Recipe"
            dataTestId="start-recipe-btn"
            disabled={ false }
            onClick={ () => console.log('button') }
          />
        </div>
      )}
    </div>
  );
}

export default FoodDetail;
