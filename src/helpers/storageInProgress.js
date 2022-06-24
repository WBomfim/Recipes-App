const INITIAL_STATE = {
  cocktails: {},
  meals: {},
};

export const getInProgressRecipes = () => {
  if (!localStorage.getItem('InProgressRecipes')) {
    localStorage.setItem('InProgressRecipes', JSON.stringify(INITIAL_STATE));
  }
  return JSON.parse(localStorage.getItem('InProgressRecipes'));
};

export const addInProgressRecipe = (recipe, route) => {
  const inProgressRecipes = getInProgressRecipes();

  if (route === 'drinks') {
    inProgressRecipes.cocktails = { ...inProgressRecipes.cocktails, ...recipe };
    localStorage.setItem('InProgressRecipes', JSON.stringify(inProgressRecipes));
  }

  if (route === 'foods') {
    inProgressRecipes.meals = { ...inProgressRecipes.meals, ...recipe };
    localStorage.setItem('InProgressRecipes', JSON.stringify(inProgressRecipes));
  }
};
