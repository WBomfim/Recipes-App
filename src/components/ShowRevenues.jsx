import React, { useContext } from 'react';
import CardRevenues from './CardRevenues';
import RevenuesContext from '../context/RevenuesContext';

function ShowRevenues() {
  const { exibitionRevenues } = useContext(RevenuesContext);

  return (
    <section>
      {exibitionRevenues !== null && (
        exibitionRevenues.map((revenue, index) => (
          <CardRevenues
            key={ index }
            index={ index }
            imagem={ revenue.strMealThumb }
            nome={ revenue.strMeal }
          />
        ))
      )}
    </section>
  );
}

export default ShowRevenues;
