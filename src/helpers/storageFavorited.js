export const getFavoriteRecipes = () => (
  JSON.parse(localStorage.getItem('favoriteRecipes')) || []
);

export const saveFavoriteRecipes = (revenue) => {
  localStorage.setItem('favoriteRecipes', JSON.stringify(revenue));
};
