export const getDoneRecipes = () => (
  JSON.parse(localStorage.getItem('doneRecipes')) || []
);

export const getInProgressRecipes = () => (
  JSON.parse(localStorage.getItem('inProgressRecipes'))
);
