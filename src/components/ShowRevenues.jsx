import React, { useContext } from 'react';
import CardRevenues from './CardRevenues';
import RevenuesContext from '../context/RevenuesContext';

function ShowRevenues() {
  const { exibitionRevenues } = useContext(RevenuesContext);
  const MAX_EXIBITION_DRINKS = 12;

  return (
    <section>
      {exibitionRevenues !== null && (
        exibitionRevenues.map((revenue, index) => (
          index < MAX_EXIBITION_DRINKS ? (
            <CardRevenues
              id={ revenue.idMeal || revenue.idDrink }
              key={ revenue.idMeal || revenue.idDrink }
              index={ index }
              image={ revenue.strDrinkThumb || revenue.strMealThumb }
              name={ revenue.strDrink || revenue.strMeal }
              nameCard="recipe-card"
            />
          ) : null
        ))
      )}
    </section>
  );
}

export default ShowRevenues;
