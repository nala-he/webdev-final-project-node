import savedRecipesModel from "./saved-recipes-model.js";

export const createSavedRecipe = async (savedRecipe) => {
    const actualSavedRecipe = await savedRecipesModel.create(savedRecipe);
    return actualSavedRecipe;
}