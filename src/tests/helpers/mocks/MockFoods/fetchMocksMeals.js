const beef = require('./beefMeals');
const mealsAll = require('./mealsAll');
const categoriesList = require('./categoriesList');
const chickenIngredients = require('./chickenIngredients');
const soupIngredients = require('./soupName');
const firstLetterMeals = require('./firstLetterMeals');
const breakfast = require('./breakfastMeals');
const chickenMeals = require('./chickenMeals');
const dessert = require('./dessert');
const goat = require('./goat');

const fetchMocks = async (url) => {
  if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
    return {
      json: async () => ({ mealsAll }),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list') {
    return {
      json: async () => (categoriesList),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?i=Chicken') {
    return {
      json: async () => ({ chickenIngredients }),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=soup') {
    return {
      json: async () => (soupIngredients),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?f=a') {
    return {
      json: async () => ({ firstLetterMeals }),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef') {
    return {
      json: async () => (beef),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast') {
    return {
      json: async () => (breakfast),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken') {
    return {
      json: async () => (chickenMeals),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert') {
    return {
      json: async () => (dessert),
    };
  }
  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat') {
    return {
      json: async () => (goat),
    };
  }
};

export default fetchMocks;
