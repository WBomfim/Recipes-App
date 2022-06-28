export const getDoneRecipes = () => (
  JSON.parse(localStorage.getItem('doneRecipes')) || []
);

export const addDoneRecipe = (recipe) => {
  const recipes = getDoneRecipes();
  const verifyDoneRecipieStorage = recipes
    .find((recipeStorage) => recipeStorage.id === recipe.id);

  if (verifyDoneRecipieStorage) {
    const recipesDone = recipes
      .filter((recipeStorage) => recipeStorage.id !== recipe.id);
    recipesDone.push(recipe);
    localStorage.setItem('doneRecipes', JSON.stringify(recipesDone));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([...recipes, recipe]));
  }
};
