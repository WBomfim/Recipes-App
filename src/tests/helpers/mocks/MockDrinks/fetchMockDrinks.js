const drinksAll = require('./drinksAll');
const lemonIngredients = require('./lemonIngredients');
const categoriesListDrinks = require('./categoriesListDrinks');
const ginName = require('./ginName');
const firstLetterDrinks = require('./firstLetterDrinks');
const ordinaryDrinks = require('./ordinaryDrinks');
const cocktailDrinks = require('./cocktailDrinks');
const shakeDrinks = require('./shakeDrinks');
const otherDrinks = require('./otherDrinks');
const cocoaDrinks = require('./cocoaDrinks');

const fetchMocks = (url) => {
  switch (url) {
  case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=':
    return {
      json: async () => ({ drinksAll }),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list':
    return {
      json: async () => (categoriesListDrinks),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon':
    return {
      json: async () => ({ lemonIngredients }),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin':
    return {
      json: async () => (ginName),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a':
    return {
      json: async () => ({ firstLetterDrinks }),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink':
    return {
      json: async () => (ordinaryDrinks),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail':
    return {
      json: async () => (cocktailDrinks),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake':
    return {
      json: async () => (shakeDrinks),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other':
    return {
      json: async () => (otherDrinks),
    };
  case 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa':
    return {
      json: async () => (cocoaDrinks),
    };
  default:
  }
};

export default fetchMocks;
