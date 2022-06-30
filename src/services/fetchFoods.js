export const getFoodsIngredients = async (search) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFoodsIngredients = async () => {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export default getAllFoodsIngredients;

export const getFoodsName = async (search) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
    const data = await response.json();
    console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodsFirstLetter = async (search) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFoods = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  try {
    const fetchFoods = await fetch(url);
    const data = await fetchFoods.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesFoods = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  try {
    const fetchCategories = await fetch(url);
    const data = await fetchCategories.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const filterFoods = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  try {
    const fetchFoodByFilter = await fetch(url);
    const data = await fetchFoodByFilter.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodsId = async (id) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodsRandom = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  try {
    const getIdRandom = await fetch(url);
    const data = await getIdRandom.json();
    return data.meals[0].idMeal;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodsNacionalities = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFilterNacionalities = async (nacionalities) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nacionalities}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};
