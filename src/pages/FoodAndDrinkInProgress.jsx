import React, { useContext, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import * as storageInProgress from '../helpers/storageInProgress';
import RevenuesContext from '../context/RevenuesContext';
import HeaderRevenue from '../components/HeaderRevenue';
import ShowDetailsProcess from '../components/ShowDetailsProcess';
import Button from '../components/Button';

function FoodInProgress() {
  const {
    getDataById,
    ingredientsList,
    ingredientsSelected,
    setIngredientsSelected,
    alertShare,
    verifyRecipiesStorage,
  } = useContext(RevenuesContext);
  const history = useHistory();
  const location = useLocation().pathname.split('/')[1];
  const { id } = useParams();
  const savedKey = location === 'foods' ? 'meals' : 'cocktails';

  useEffect(() => {
    const getData = async () => {
      if (location === 'foods') {
        await getDataById('foods', id);
      } else {
        await getDataById('drinks', id);
      }
    };

    const getStorageInProgress = () => {
      const storage = storageInProgress.getInProgressRecipes();
      if (location === 'drinks' && storage.cocktails[id]) {
        setIngredientsSelected(storage.cocktails[id]);
      }

      if (location === 'foods' && storage.meals[id]) {
        setIngredientsSelected(storage.meals[id]);
      }
    };

    getData();
    getStorageInProgress();
    verifyRecipiesStorage(id, savedKey);
  }, []);

  return (
    <div>
      {ingredientsList.length > 0 && (
        <>
          <HeaderRevenue />
          {alertShare && <span>Link copied!</span>}
          <ShowDetailsProcess />
          <Button
            name="Finish Recipe"
            disabled={ ingredientsList.length !== ingredientsSelected.length }
            onClick={ () => history.push('/done-recipes') }
            dataTestId="finish-recipe-btn"
          />
        </>
      )}
    </div>
  );
}

export default FoodInProgress;
