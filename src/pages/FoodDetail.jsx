import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import RevenuesHeader from '../components/RevenuesHeader';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import VideoRevenues from '../components/VideoRevenues';
import Button from '../components/Button';
import CardRevenues from '../components/CardRevenues';

function FoodDetail() {
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();
  const { getDataById, exibitionRevenues } = useContext(RevenuesContext);

  useEffect(() => {
    getDataById(id, 'foods');
  }, []);

  useEffect(() => {
    const TWENTY = 20;
    const [revenue] = exibitionRevenues;
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
  }, [exibitionRevenues]);

  return (
    <div>
      {exibitionRevenues.length > 0
      && exibitionRevenues.map((revenue) => (
        <div key={ revenue.idMeal }>
          <RevenuesHeader
            image={ revenue.strMealThumb }
            name={ revenue.strMeal }
            category={ revenue.strCategory }
            favorited
          />
          <Ingredients ingredients={ ingredients } />
          <Instructions instructions={ revenue.strInstructions } />
          <VideoRevenues video={ revenue.strYoutube } />
          <CardRevenues />
          <Button />
        </div>
      ))}
      {/* {exibitionRevenues.length > 0 && <Ingredients ingredients={ ingredients } />} */}
    </div>
  );
}

export default FoodDetail;
