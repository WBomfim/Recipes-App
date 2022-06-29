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
    finishAndSaveRecipe,
  } = useContext(RevenuesContext);

  const { id } = useParams();
  const history = useHistory();
  const location = useLocation().pathname.split('/')[1];
  const locationName = location.split('s')[0];
  const savedKey = location === 'foods' ? 'meals' : 'cocktails';

  useEffect(() => {
    const getStorageInProgress = () => {
      const storage = storageInProgress.getInProgressRecipes();
      if (location === 'drinks' && storage.cocktails[id]) {
        setIngredientsSelected(storage.cocktails[id]);
      }

      if (location === 'foods' && storage.meals[id]) {
        setIngredientsSelected(storage.meals[id]);
      }
    };
    getDataById(location, id);
    getStorageInProgress();
    verifyRecipiesStorage(id, savedKey);
  }, []);

  const finishRecipe = () => {
    finishAndSaveRecipe(locationName);
    history.push('/done-recipes');
  };

  if (ingredientsList.length === 0) return null;

  return (
    <>
      <HeaderRevenue />
      {alertShare && <span>Link copied!</span>}
      <ShowDetailsProcess />
      <Button
        name="Finish Recipe"
        disabled={ ingredientsList.length !== ingredientsSelected.length }
        onClick={ () => finishRecipe() }
        dataTestId="finish-recipe-btn"
      />
    </>
  );
}

export default FoodInProgress;
