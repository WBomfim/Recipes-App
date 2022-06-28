import React, { useEffect, useContext } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import HeaderRevenue from '../components/HeaderRevenue';
import ShowDetailsRevenues from '../components/ShowDetailsRevenues';
import VideoRevenues from '../components/VideoRevenues';
import Button from '../components/Button';
import CarouselRevenues from '../components/CarouselRevenues';
import '../styles/FoodAndDrinkDetails.css';

function FoodAndDrinkDetail() {
  const {
    getDataById,
    exibitionDetails,
    getData,
    verifyRecipiesStorage,
    doneRecipes,
    progressRecipies,
    alertShare,
  } = useContext(RevenuesContext);

  const { id } = useParams();
  const history = useHistory();
  const location = useLocation().pathname;
  const locationName = location.split('/')[1];
  const [revenueDetails] = exibitionDetails;
  const inverseLocation = locationName === 'foods' ? 'drinks' : 'foods';
  const keyStorage = locationName === 'foods' ? 'meals' : 'cocktails';

  useEffect(() => {
    getDataById(locationName, id);
    getData(inverseLocation);
    verifyRecipiesStorage(id, keyStorage);
  }, [location]);

  if (!revenueDetails) return null;

  return (
    <>
      <HeaderRevenue />
      {alertShare && <span>Link copied!</span>}
      <ShowDetailsRevenues />
      {revenueDetails.strYoutube && <VideoRevenues />}
      <CarouselRevenues />
      {doneRecipes ? null : (
        <div className="container-recomendation">
          <Button
            name={ progressRecipies ? 'Continue Recipe' : 'Start Recipe' }
            dataTestId="start-recipe-btn"
            disabled={ false }
            onClick={ () => history.push(`${location}/in-progress`) }
          />
        </div>
      )}
    </>
  );
}

export default FoodAndDrinkDetail;
