const INITIAL_STATE = {
  cocktails: {},
  meals: {},
};

export const getInProgressRecipes = () => {
  if (!localStorage.getItem('inProgressRecipes')) {
    localStorage.setItem('inProgressRecipes', JSON.stringify(INITIAL_STATE));
  }
  return JSON.parse(localStorage.getItem('inProgressRecipes'));
};

export const addInProgressRecipe = (recipe, route) => {
  const inProgressRecipes = getInProgressRecipes();

  if (route === 'drinks') {
    inProgressRecipes.cocktails = { ...inProgressRecipes.cocktails, ...recipe };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }

  if (route === 'foods') {
    inProgressRecipes.meals = { ...inProgressRecipes.meals, ...recipe };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }
};
