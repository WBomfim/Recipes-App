import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import RevenuesHeader from '../components/RevenuesHeader';
import ShowDetailsRevenues from '../components/ShowDetailsRevenues';
import Button from '../components/Button';
import CardRevenues from '../components/CardRevenues';

function DrinkDetail() {
  const { id } = useParams();
  const {
    getDataById,
    exibitionDetails,
    handleFavorite,
    handleShare,
    ingredientsList,
    getData,
    exibitionRevenues,
  } = useContext(RevenuesContext);
  const [revenueDetails] = exibitionDetails;
  const MAX_RECOMENDATIONS_FOODS = 6;

  useEffect(() => {
    getDataById('drinks', id);
    getData('foods');
  }, []);

  return (
    <div>
      {revenueDetails
      && (
        <div>
          <RevenuesHeader
            image={ revenueDetails.strDrinkThumb }
            name={ revenueDetails.strDrink }
            category={ revenueDetails.strAlcoholic }
            favorited
            handleFavorite={ handleFavorite }
            handleShare={ handleShare }
          />
          <ShowDetailsRevenues
            ingredients={ ingredientsList }
            instructions={ revenueDetails.strInstructions }
          />
          <div className="card-revenues-container">
            {exibitionRevenues && (
              exibitionRevenues.map((revenue, index) => (
                index < MAX_RECOMENDATIONS_FOODS ? (
                  <CardRevenues
                    key={ revenue.idDrink }
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

export default DrinkDetail;
