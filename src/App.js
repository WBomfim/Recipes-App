import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import FoodDetail from './pages/FoodDetail';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import DrinkDetail from './pages/DrinkDetail';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodIngredients from './pages/ExploreFoodIngredients';
import ExploreDrinkIngredients from './pages/ExploreDrinkIngredients';
import ExploreFoodNationalities from './pages/ExploreFoodNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route path="/foods/:id" component={ FoodDetail } />
      <Route path="/foods/:id/in-progress" component={ FoodInProgress } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route path="/drinks/:id" component={ DrinkDetail } />
      <Route path="/drinks/:id/in-progress" component={ DrinkInProgress } />
      <Route exact path="/explore" component={ Explore } />
      <Route path="/explore/foods" component={ ExploreFoods } />
      <Route path="/explore/drinks" component={ ExploreDrinks } />
      <Route path="/explore/foods/ingredients" component={ ExploreFoodIngredients } />
      <Route path="/explore/drinks/ingredients" component={ ExploreDrinkIngredients } />
      <Route path="/explore/foods/nationalities" component={ ExploreFoodNationalities } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
