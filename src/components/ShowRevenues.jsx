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
              key={ index }
              index={ index }
              imagem={ revenue.strDrinkThumb || revenue.strMealThumb }
              nome={ revenue.strDrink || revenue.strMeal }
            />
          ) : null
        ))
      )}
    </section>
  );
}

export default ShowRevenues;
