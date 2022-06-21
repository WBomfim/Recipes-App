export const getCategoriesFoods = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const fetchCategories = await fetch(url);
  const data = await fetchCategories.json();
  return data.meals;
};

export const filterFoods = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const fetchFoodByFilter = await fetch(url);
  const data = await fetchFoodByFilter.json();
  return data.meals;
};

export const getCategoriesDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const fetchCategories = await fetch(url);
  const data = await fetchCategories.json();
  return data.drinks;
};

export const filterDrinks = async (category) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const fetchDrinksByFilter = await fetch(url);
  const data = await fetchDrinksByFilter.json();
  return data.drinks;
};
