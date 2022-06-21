import React from 'react';
// import CardRevenues from './CardRevenues';

function CardDetailsRevenues() {
  return (
    <div>
      <p data-testid="recipe-category">{ category }</p>
      <h2>Ingredients</h2>
      {/* <p data-testid="`${index}-ingredient-name-and-measure`">{ ingredients }</p> */}
      <h2>Instructions</h2>
      <p data-testid="instructions">{ instructions }</p>
      {/* <video src={ video } data-testid="video" />
      <CardRevenues data-testid="`${index}-recomendation-card`" /> */}
      <button data-testid="start-recipe-btn" type="button">Start Recipe</button>
    </div>
  );
}

export default CardDetailsRevenues;
