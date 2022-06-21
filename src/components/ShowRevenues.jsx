import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CardRevenues from './CardRevenues';
import RevenuesContext from '../context/RevenuesContext';

function ShowRevenues() {
  const { exibitionRevenues } = useContext(RevenuesContext);
  const location = useLocation().pathname;
  const MAX_EXIBITION_DRINKS = 12;

  const changeExibition = () => {
    console.log(exibitionRevenues);
    if (location === '/drinks') {
      return (
        exibitionRevenues.map((revenue, index) => (
          index <= MAX_EXIBITION_DRINKS ? (
            <CardRevenues
              key={ index }
              index={ index }
              imagem={ revenue.strDrinkThumb }
              nome={ revenue.strDrink }
            />
          ) : null
        ))
      );
    }

    return (
      exibitionRevenues.map((revenue, index) => (
        <CardRevenues
          key={ index }
          index={ index }
          imagem={ revenue.strMealThumb }
          nome={ revenue.strMeal }
        />
      ))
    );
  };

  return (
    <section>
      {exibitionRevenues !== null && (
        changeExibition()
      )}
    </section>
  );
}

export default ShowRevenues;
