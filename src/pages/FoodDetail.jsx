import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import RevenuesHeader from '../components/RevenuesHeader';
import Ingredients from '../components/Ingredients';

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
      {exibitionRevenues.map((revenue) => (
        <RevenuesHeader
          key={ revenue.idMeal }
          image={ revenue.strMealThumb }
          name={ revenue.strMeal }
          category={ revenue.strCategory }
          favorited
        />
      ))}
      {ingredients.length > 0 && <Ingredients ingredients={ ingredients } />}
    </div>
  );
}

export default FoodDetail;
