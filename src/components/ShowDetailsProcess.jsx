import React, { useContext, useEffect } from 'react';
import RevenuesContext from '../context/RevenuesContext';

function ShowDetailsProcess() {
  const {
    exibitionDetails,
    setExibitionDetails,
    ingredientsList,
  } = useContext(RevenuesContext);
  const [revenueDetails] = exibitionDetails;
  const { progressList } = revenueDetails;

  useEffect(() => {
    const createCheckedList = () => {
      const newObject = revenueDetails;
      const checkedList = [];
      ingredientsList.forEach(() => {
        checkedList.push(false);
      });
      newObject.progressList = checkedList;
      setExibitionDetails([newObject]);
    };
    createCheckedList();
  }, []);

  const handleSelect = ({ target }) => {
    const newObject = revenueDetails;
    newObject.progressList[target.id] = !newObject.progressList[target.id];
    setExibitionDetails([newObject]);
  };

  return (
    <section>
      <h2>Ingredients</h2>
      {ingredientsList.length > 0 && (
        <ul>
          {ingredientsList.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <label htmlFor={ index }>
                <input
                  id={ index }
                  type="checkbox"
                  checked={ progressList === undefined ? false : progressList[index] }
                  onChange={ (event) => handleSelect(event) }
                />
                { ingredient }
              </label>
            </li>
          ))}
        </ul>
      )}
      <h2>Instructions</h2>
      <p data-testid="instructions">{ revenueDetails.strInstructions }</p>
    </section>
  );
}

export default ShowDetailsProcess;
