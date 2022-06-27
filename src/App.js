import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import FoodAndDrinkDetail from './pages/FoodAndDrinkDetail';
import FoodAndDrinkInProgress from './pages/FoodAndDrinkInProgress';
import FoodsAndDrinks from './pages/FoodsAndDrinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodDrinkIngredients from './pages/ExploreFoodDrinkIngredients';
import ExploreFoodNationalities from './pages/ExploreFoodNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import './App.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ FoodsAndDrinks } />
      <Route exact path="/foods/:id" component={ FoodAndDrinkDetail } />
      <Route exact path="/foods/:id/in-progress" component={ FoodAndDrinkInProgress } />
      <Route exact path="/drinks" component={ FoodsAndDrinks } />
      <Route exact path="/drinks/:id" component={ FoodAndDrinkDetail } />
      <Route exact path="/drinks/:id/in-progress" component={ FoodAndDrinkInProgress } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodDrinkIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreFoodDrinkIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodNationalities }
      />
      <Route
        exact
        path="/explore/drinks/nationalities"
        component={ NotFound }
      />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
