import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import RevenuesHeader from '../components/RevenuesHeader';
import ShowDetailsRevenues from '../components/ShowDetailsRevenues';
// import VideoRevenues from '../components/VideoRevenues';
// import Button from '../components/Button';
// import CardRevenues from '../components/CardRevenues';

function FoodDetail() {
  const { id } = useParams();
  const {
    getDataById,
    exibitionDetails,
    handleFavorite,
    handleShare,
    ingredientsList,
  } = useContext(RevenuesContext);
  const [revenue] = exibitionDetails;

  useEffect(() => {
    getDataById('foods', id);
  }, []);

  return (
    <div>
      {revenue
      && (
        <div>
          <RevenuesHeader
            image={ revenue.strMealThumb }
            name={ revenue.strMeal }
            category={ revenue.strCategory }
            favorited
            handleFavorite={ handleFavorite }
            handleShare={ handleShare }
          />
          <ShowDetailsRevenues
            ingredients={ ingredientsList }
            instructions={ revenue.strInstructions }
          />
          {/* <VideoRevenues video={ revenue.strYoutube } /> */}
          {/* <CardRevenues /> */}
          {/* <Button /> */}
        </div>
      )}
    </div>
  );
}

export default FoodDetail;
