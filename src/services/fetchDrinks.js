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

export const getAllDrinksIngredients = async () => {
  try {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
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
  try {
    const fetchDrinks = await fetch(url);
    const data = await fetchDrinks.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  try {
    const fetchCategories = await fetch(url);
    const data = await fetchCategories.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const filterDrinks = async (category) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  try {
    const fetchDrinksByFilter = await fetch(url);
    const data = await fetchDrinksByFilter.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getDrinksId = async (id) => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getDrinksRandom = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  try {
    const getIdRandom = await fetch(url);
    const data = await getIdRandom.json();
    return data.drinks[0].idDrink;
  } catch (error) {
    console.log(error);
  }
};
