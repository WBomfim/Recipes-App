import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import FoodAndDrinkDetail from './pages/FoodAndDrinkDetail';
import FoodAndDrinkInProgress from './pages/FoodAndDrinkInProgress';
import FoodsAndDrinks from './pages/FoodsAndDrinks';
import Explore from './pages/Explore';
import ExploreFoodsAndDrinks from './pages/ExploreFoodsAndDrinks';
import ExploreFoodDrinkIngredients from './pages/ExploreFoodDrinkIngredients';
import ExploreFoodNationalities from './pages/ExploreFoodNationalities';
import Profile from './pages/Profile';
import DoneAndFavoriteRecipes from './pages/DoneAndFavoriteRecipes';
import NotFound from './pages/NotFound';
import './App.css';
import RevenuesProvider from './context/RevenuesProvider';

function App() {
  return (
    <RevenuesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ FoodsAndDrinks } />
        <Route exact path="/foods/:id" component={ FoodAndDrinkDetail } />
        <Route exact path="/foods/:id/in-progress" component={ FoodAndDrinkInProgress } />
        <Route exact path="/drinks" component={ FoodsAndDrinks } />
        <Route exact path="/drinks/:id" component={ FoodAndDrinkDetail } />
        <Route
          exact
          path="/drinks/:id/in-progress"
          component={ FoodAndDrinkInProgress }
        />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoodsAndDrinks } />
        <Route exact path="/explore/drinks" component={ ExploreFoodsAndDrinks } />
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
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneAndFavoriteRecipes } />
        <Route path="/favorite-recipes" component={ DoneAndFavoriteRecipes } />
        <Route component={ NotFound } />
      </Switch>
    </RevenuesProvider>
  );
}

export default App;
