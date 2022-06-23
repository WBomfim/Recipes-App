import React from 'react';
// import CardRevenues from './CardRevenues';

function ShowDetailsProcess() {
  return (
    <div>
      <h2>Ingredients</h2>
      {/* <p data-testid="`${index}-ingredient-name-and-measure`">{ ingredients }</p> */}
      <h2>Instructions</h2>
      <p data-testid="instructions">{ instructions }</p>
      {/* <video src={ video } data-testid="video" />
      <CardRevenues data-testid="`${index}-recomendation-card`" /> */}
    </div>
  );
}

export default ShowDetailsProcess;
