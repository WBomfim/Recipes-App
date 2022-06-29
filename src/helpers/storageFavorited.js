export const getFavoriteRecipes = () => (
  JSON.parse(localStorage.getItem('favoriteRecipes')) || []
);

export const saveFavoriteRecipes = (revenue) => {
  const recipes = getFavoriteRecipes();
  localStorage.setItem('favoriteRecipes', JSON.stringify([...recipes, revenue]));
};

export const removeFavoriteRecipes = (revenue) => {
  const recipes = getFavoriteRecipes();
  const recipesFavorite = recipes
    .filter((recipe) => recipe.id !== revenue.id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(recipesFavorite));
};
