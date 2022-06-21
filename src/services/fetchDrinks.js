export const getDrinksIngredients = async (search) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`,
    );
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getDrinksName = async (search) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
    );
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getDrinksFirstLetter = async (search) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`,
    );
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const fetchDrinks = await fetch(url);
  const data = await fetchDrinks.json();
  return data.drinks;
};
