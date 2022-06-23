export const getDoneRecipes = () => (
  JSON.parse(localStorage.getItem('doneRecipes')) || []
);

export const getInProgressRecipes = () => (
  JSON.parse(localStorage.getItem('inProgressRecipes')) || []
);

export const setTokens = () => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
};

export const setUserEmail = (email) => {
  const userEmail = { email };
  localStorage.setItem('user', JSON.stringify(userEmail));
};
