export const getInProgressRecipes = () => {
  if (!localStorage.getItem('InProgressRecipes')) {
    localStorage.setItem('InProgressRecipes', JSON.stringify({}));
  }
  return JSON.parse(localStorage.getItem('InProgressRecipes'));
};

export const addInProgressRecipe = (recipe) => {
  const inProgressRecipes = getInProgressRecipes();
  const newInProgressRecipes = { ...inProgressRecipes, ...recipe };
  localStorage.setItem('InProgressRecipes', JSON.stringify(newInProgressRecipes));
};
