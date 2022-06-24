const getFavoriteRecipes = () => (
  JSON.parse(localStorage.getItem('favoriteRecipes')) || []
);

export default getFavoriteRecipes;
