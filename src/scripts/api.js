export default {
  deleteRecipe(recipeId) {
    return fetch(`http://localhost:3030/recipes/${recipeId}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
  getAllRecipes() {
    return fetch("http://localhost:3030/recipes").then((response) =>
      response.json()
    );
  },
};
