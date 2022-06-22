import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import RevenuesHeader from '../components/RevenuesHeader';
import ShowDetailsRevenues from '../components/ShowDetailsRevenues';
// import VideoRevenues from '../components/VideoRevenues';
// import Button from '../components/Button';
// import CardRevenues from '../components/CardRevenues';

function FoodDetail() {
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();
  const {
    getDataById,
    exibitionDetails,
    handleFavorite,
    handleShare,
  } = useContext(RevenuesContext);

  useEffect(() => {
    getDataById('foods', id);
  }, []);

  useEffect(() => {
    const TWENTY = 20;
    const [revenue] = exibitionDetails;
    let arrayIngredients = [];
    if (revenue) {
      for (let i = 1; i <= TWENTY; i += 1) {
        if (revenue[`strIngredient${i}`] !== ''
        && revenue[`strIngredient${i}`] !== null) {
          arrayIngredients = [...arrayIngredients,
            `${revenue[`strIngredient${i}`]} - ${revenue[`strMeasure${i}`]}`];
        }
      }
      setIngredients(arrayIngredients);
    }
  }, [exibitionDetails]);

  return (
    <div>
      {exibitionDetails.length > 0
      && exibitionDetails.map((revenue) => (
        <div key={ revenue.idMeal }>
          <RevenuesHeader
            image={ revenue.strMealThumb }
            name={ revenue.strMeal }
            category={ revenue.strCategory }
            favorited
            handleFavorite={ handleFavorite }
            handleShare={ handleShare }
          />
          <ShowDetailsRevenues
            ingredients={ ingredients }
            instructions={ revenue.strInstructions }
          />
          {/* <VideoRevenues video={ revenue.strYoutube } /> */}
          {/* <CardRevenues /> */}
          {/* <Button /> */}
        </div>
      ))}
    </div>
  );
}

export default FoodDetail;
