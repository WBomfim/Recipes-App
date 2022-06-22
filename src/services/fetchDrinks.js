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

export const getDrinksId = async (id) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};
